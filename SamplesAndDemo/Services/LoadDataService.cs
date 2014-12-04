using System;
using System.Collections.Generic;
using System.Text;
using System.Data;
using Aspectize.Core;
using AdventureWorks.Production;
using AdventureWorks.HumanResources;
using AdventureWorks.Person;
using AdventureWorks.Sales;
using System.Reflection;

namespace Samples
{
    public interface ILoadDataService
    {
        [Command(BrowserCacheDuration = "30 Days", ServerCacheDuration = "30 days")]
        DataSet LoadCategories();

        [Command(BrowserCacheDuration = "30 Days", ServerCacheDuration = "30 days")]
        DataSet LoadSubcategories(int categoryID);

        [Command(BrowserCacheDuration = "30 Days", ServerCacheDuration = "30 days")]
        DataSet LoadProducts(int subcategoryID);

        [Command(BrowserCacheDuration = "30 Days", ServerCacheDuration = "30 days")]
        DataSet LoadAllCategoriesAndProducts();

        [Command(BrowserCacheDuration = "30 Days", ServerCacheDuration = "30 days")]
        Byte[] LoadImage(int productId);

        [Command(BrowserCacheDuration = "30 Days", ServerCacheDuration = "30 days")]
        DataSet LoadSalesOrdersHeader(int salesPersonId);

        [Command(BrowserCacheDuration = "30 Days", ServerCacheDuration = "30 days")]
        DataSet LoadDataDemo();

        void BuildDataDemo();
    }

    [Service(Name = "LoadDataService")]
    public class LoadDataService : ILoadDataService //, IInitializable, ISingleton
    {

        DataSet ILoadDataService.LoadCategories()
        {
            IDataManager dm = EntityManager.FromDataBaseService(ServiceName.ADWDB);

            dm.LoadEntities<Category>();

            return dm.Data;
        }

        DataSet ILoadDataService.LoadSubcategories(int categoryID)
        {
            IDataManager dm = EntityManager.FromDataBaseService(ServiceName.ADWDB);

            dm.LoadAssociated<Subcategory, CategorySubcategory>(categoryID);

            return dm.Data;
        }

        DataSet ILoadDataService.LoadProducts(int subcategoryID)
        {
            IDataManager dm = EntityManager.FromDataBaseService(ServiceName.ADWDB);

            dm.LoadDatabaseEnum<UnitMeasure>();

            var relations = new List<IRoleRelationQuery>();
            
            relations.Add(new RoleRelationQuery<Subcategory, ProductSubcategory>());
            relations.Add(new RoleRelationQuery<Product, ProductProductPhoto>());
            
            dm.LoadEntitiesGraph<Subcategory>(relations, subcategoryID);

            return dm.Data;
        }


        DataSet ILoadDataService.LoadAllCategoriesAndProducts()
        {
            IDataManager dm = EntityManager.FromDataBaseService(ServiceName.ADWDB);

            dm.LoadDatabaseEnum<UnitMeasure>();

            var relations = new List<IRoleRelationQuery>();

            relations.Add(new RoleRelationQuery<Category, CategorySubcategory>());
            relations.Add(new RoleRelationQuery<Subcategory, ProductSubcategory>());
            relations.Add(new RoleRelationQuery<Product, ProductProductPhoto>());

            dm.LoadEntitiesGraph<Category>(relations);

            return dm.Data;
        }


        byte[] ILoadDataService.LoadImage(int productId)
        {
            IDataManager dataManager = EntityManager.FromDataBaseService(ServiceName.ADWDB);

            List<ProductPhoto> productPhotos = dataManager.GetAssociated<ProductPhoto, ProductProductPhoto>(productId);

            if (productPhotos.Count > 0)
            {
                return productPhotos[0].LargePhoto ?? EmptyImage.Bytes;
            }

            return EmptyImage.Bytes;
        }

        DataSet ILoadDataService.LoadSalesOrdersHeader(int salesPersonId)
        {
            IDataManager dm = EntityManager.FromDataBaseService(ServiceName.ADWDB);

            var relations = new List<IRoleRelationQuery>();

            relations.Add(new RoleRelationQuery<SalesPerson, SalesOrderHeaderSalesPerson>());
            relations.Add(new RoleRelationQuery<SalesPerson, ContactSalesPerson>());
            relations.Add(new RoleRelationQuery<SalesOrderHeader, SalesOrderHeaderSalesReason>());

            dm.LoadEntitiesGraph<SalesPerson>(relations, salesPersonId);

            return dm.Data;
        }

        DataSet ILoadDataService.LoadDataDemo()
        {
            IFileService fs = ExecutingContext.GetService<IFileService>(ServiceName.ADWFileService);

            var dataDemo = fs.Read("DataDemo");

            var ds = DataSetHelper.BinaryLoad(dataDemo);

            return ds;
        }
        
        void ILoadDataService.BuildDataDemo()
        {
            //string adwCnxString = @"Data Source=NICOW8\SQLEXPRESS;Initial Catalog=AdventureWorks;Integrated Security=True";

            //IDataManager dmSQL = EntityManager.FromConnectionString(adwCnxString, DBMS.SQLServer2005);

            //IEntityManager emSql = dmSQL as IEntityManager;

            //dmSQL.LoadAssociated<SalesReason, SalesOrderHeaderSalesReason>();

            //foreach (SalesReason salesReason in emSql.GetAllInstances<SalesReason>())
            //{
            //    //salesReason.data.SetAdded();

            //    foreach (SalesOrderHeaderSalesReason sohsr in salesReason.GetRelationsInstances<SalesOrderHeader, SalesOrderHeaderSalesReason>())
            //    {
            //        sohsr.data.SetAdded();
            //    }
            //}

            //IDataManager dm = EntityManager.FromDataSetAndBaseService(emSql.Data, ServiceName.ADWDB);

            //dm.SaveTransactional();


            IDataManager dm = EntityManager.FromDataBaseService(ServiceName.ADWDB);

            var relations = new List<IRoleRelationQuery>();

            relations.Add(new RoleRelationQuery<Category, CategorySubcategory>());
            relations.Add(new RoleRelationQuery<Subcategory, ProductSubcategory>());
            relations.Add(new RoleRelationQuery<Product, ProductProductPhoto>());

            dm.LoadEntitiesGraph<Category>(relations);

            relations = new List<IRoleRelationQuery>();

            relations.Add(new RoleRelationQuery<Employee, EmployeeManager>());
            relations.Add(new RoleRelationQuery<Employee, EmployeeContact>());

            dm.LoadEntitiesGraph<Employee>(relations);

            relations = new List<IRoleRelationQuery>();

            relations.Add(new RoleRelationQuery<SalesPerson, ContactSalesPerson>());
            relations.Add(new RoleRelationQuery<SalesPerson, SalesOrderHeaderSalesPerson>());
            relations.Add(new RoleRelationQuery<SalesOrderHeader, SalesOrderHeaderSalesReason>());

            dm.LoadEntitiesGraphFields<SalesPerson>(EntityLoadOption.AllFields, relations);

            dm.LoadEntities<SalesReason>();

            IFileService fs = ExecutingContext.GetService<IFileService>(ServiceName.ADWFileService);

            var data = DataSetHelper.BinarySave(dm.Data);

            fs.Write("DataDemo", data);
        }


    }

}
