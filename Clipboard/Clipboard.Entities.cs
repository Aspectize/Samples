
using System;
using System.Collections.Generic;
using System.Text;
using System.Data;
using System.ComponentModel;

using Aspectize.Core;

[assembly:AspectizeDALAssemblyAttribute]

namespace Clipboard
{
	public static partial class SchemaNames
	{
		public static partial class Entities
		{
			public const string Clipboard = "Clipboard";
		}
	}

	[SchemaNamespace]
	public class DomainProvider : INamespace
	{
		public string Name { get { return GetType().Namespace; } }
		public static string DomainName { get { return new DomainProvider().Name; } }
	}


	[DataDefinition(BeforeUpdate = "AspectizeTriggerService.SetDateNow('DateModified');")]
	public class Clipboard : Entity, IDataWrapper
	{
		public static partial class Fields
		{
			public const string Id = "Id";
			public const string DateCreated = "DateCreated";
			public const string DateModified = "DateModified";
			public const string AccessCode = "AccessCode";
			public const string Libelle = "Libelle";
			public const string Content = "Content";
		}

		void IDataWrapper.InitData(DataRow data, string namePrefix)
		{
			base.InitData(data, null);
		}

		[Data(IsPrimaryKey=true)]
		public Guid Id
		{
			get { return getValue<Guid>("Id"); }
			set { setValue<Guid>("Id", value); }
		}

		[Data]
		public DateTime DateCreated
		{
			get { return getValue<DateTime>("DateCreated"); }
			set { setValue<DateTime>("DateCreated", value); }
		}

		[Data]
		public DateTime DateModified
		{
			get { return getValue<DateTime>("DateModified"); }
			set { setValue<DateTime>("DateModified", value); }
		}

		[Data(DefaultValue = "")]
		public string AccessCode
		{
			get { return getValue<string>("AccessCode"); }
			set { setValue<string>("AccessCode", value); }
		}

		[Data(DefaultValue = "")]
		public string Libelle
		{
			get { return getValue<string>("Libelle"); }
			set { setValue<string>("Libelle", value); }
		}

		[Data(DefaultValue = "")]
		public string Content
		{
			get { return getValue<string>("Content"); }
			set { setValue<string>("Content", value); }
		}

	}

}


  
