
using System;
using System.Collections.Generic;
using System.Text;
using System.Data;
using System.ComponentModel;

using Aspectize.Core;

[assembly:AspectizeDALAssemblyAttribute]

namespace Map
{
	public static partial class SchemaNames
	{
		public static partial class Entities
		{
			public const string Place = "Place";
		}
	}

	[SchemaNamespace]
	public class DomainProvider : INamespace
	{
		public string Name { get { return GetType().Namespace; } }
		public static string DomainName { get { return new DomainProvider().Name; } }
	}


	public class Adress : DataWrapper, IDataWrapper, IStructuredData
	{
		void IDataWrapper.InitData(DataRow data, string namePrefix)
		{
			base.InitData(data, namePrefix);
		}

		[Data(DefaultValue = "")]
		public string FullAdress
		{
			get { return getValue<string>("FullAdress"); }
			set { setValue<string>("FullAdress", value); }
		}

		[Data(DefaultValue = "")]
		public string StreetNumber
		{
			get { return getValue<string>("StreetNumber"); }
			set { setValue<string>("StreetNumber", value); }
		}

		[Data(DefaultValue = "")]
		public string Route
		{
			get { return getValue<string>("Route"); }
			set { setValue<string>("Route", value); }
		}

		[Data(DefaultValue = "")]
		public string City
		{
			get { return getValue<string>("City"); }
			set { setValue<string>("City", value); }
		}

		[Data(DefaultValue = "")]
		public string Zip
		{
			get { return getValue<string>("Zip"); }
			set { setValue<string>("Zip", value); }
		}

		[Data(DefaultValue = "")]
		public string Country
		{
			get { return getValue<string>("Country"); }
			set { setValue<string>("Country", value); }
		}
	}

	[DataDefinition(MustPersist = false)]
	public class Place : Entity, IDataWrapper
	{
		public static partial class Fields
		{
			public const string Id = "Id";
			public const string Adress = "Adress";
			public const string Latitude = "Latitude";
			public const string Longitude = "Longitude";
		}

		void IDataWrapper.InitData(DataRow data, string namePrefix)
		{
			base.InitData(data, null);

			Adress = new Adress();
			((IDataWrapper)Adress).InitData(data, buildNamePrefix("Adress"));
		}

		[Data(IsPrimaryKey=true)]
		public Guid Id
		{
			get { return getValue<Guid>("Id"); }
			set { setValue<Guid>("Id", value); }
		}

		[Data]
		public Adress Adress;

		[Data]
		public double Latitude
		{
			get { return getValue<double>("Latitude"); }
			set { setValue<double>("Latitude", value); }
		}

		[Data]
		public double Longitude
		{
			get { return getValue<double>("Longitude"); }
			set { setValue<double>("Longitude", value); }
		}

	}

}


  
