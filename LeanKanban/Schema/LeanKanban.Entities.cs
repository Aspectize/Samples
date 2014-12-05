
using System;
using System.Collections.Generic;
using System.Text;
using System.Data;
using System.ComponentModel;

using Aspectize.Core;

[assembly:AspectizeDALAssemblyAttribute]

namespace LeanKanban
{
	public static partial class SchemaNames
	{
		public static partial class Entities
		{
			public const string WorkItem = "WorkItem";
			public const string State = "State";
			public const string Board = "Board";
		}

		public static partial class Relations
		{
			public const string WorkItemState = "WorkItemState";
			public const string BoardState = "BoardState";
		}
	}

	[SchemaNamespace]
	public class DomainProvider : INamespace
	{
		public string Name { get { return GetType().Namespace; } }
		public static string DomainName { get { return new DomainProvider().Name; } }
	}


	[DataDefinition]
	public class WorkItem : Entity, IDataWrapper
	{
		public static partial class Fields
		{
			public const string Id = "Id";
			public const string DateCreation = "DateCreation";
			public const string Title = "Title";
			public const string Description = "Description";
			public const string Adress = "Adress";
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
		public DateTime DateCreation
		{
			get { return getValue<DateTime>("DateCreation"); }
			set { setValue<DateTime>("DateCreation", value); }
		}

		[Data(DefaultValue = "")]
		public string Title
		{
			get { return getValue<string>("Title"); }
			set { setValue<string>("Title", value); }
		}

		[Data(DefaultValue = "")]
		public string Description
		{
			get { return getValue<string>("Description"); }
			set { setValue<string>("Description", value); }
		}

		[Data(DefaultValue = "")]
		public string Adress
		{
			get { return getValue<string>("Adress"); }
			set { setValue<string>("Adress", value); }
		}

	}

	[DataDefinition]
	public class State : Entity, IDataWrapper
	{
		public static partial class Fields
		{
			public const string Id = "Id";
			public const string Title = "Title";
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

		[Data(DefaultValue = "")]
		public string Title
		{
			get { return getValue<string>("Title"); }
			set { setValue<string>("Title", value); }
		}

	}

	[DataDefinition]
	public class Board : Entity, IDataWrapper
	{
		public static partial class Fields
		{
			public const string Id = "Id";
			public const string Name = "Name";
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

		[Data(DefaultValue = "", RegexPattern = @"(?#Name can not be empty)\S+")]
		public string Name
		{
			get { return getValue<string>("Name"); }
			set { setValue<string>("Name", value); }
		}

	}

	[DataDefinition]
	[RelationPersistenceMode(SeparateTable = false)]
	public class WorkItemState : DataWrapper, IDataWrapper, IRelation
	{
		void IDataWrapper.InitData(DataRow data, string namePrefix)
		{
			base.InitData(data, null);
		}

		[RelationEnd(Type = typeof(State), Role = typeof(State), Multiplicity = Multiplicity.One, FkNames = "StateId")]
		public IEntity State;

		[RelationEnd(Type = typeof(WorkItem), Role = typeof(WorkItem), Multiplicity = Multiplicity.ZeroOrMany)]
		public IEntity WorkItem;

	}

	[DataDefinition]
	[RelationPersistenceMode(SeparateTable = false)]
	public class BoardState : DataWrapper, IDataWrapper, IRelation
	{
		void IDataWrapper.InitData(DataRow data, string namePrefix)
		{
			base.InitData(data, null);
		}

		[RelationEnd(Type = typeof(Board), Role = typeof(Board), Multiplicity = Multiplicity.One, FkNames = "BoardId")]
		public IEntity Board;

		[RelationEnd(Type = typeof(State), Role = typeof(State), Multiplicity = Multiplicity.ZeroOrMany)]
		public IEntity State;

	}

}


  
