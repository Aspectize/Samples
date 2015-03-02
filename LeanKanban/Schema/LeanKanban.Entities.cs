
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
			public const string User = "User";
			public const string CurrentUser = "CurrentUser";
		}

		public static partial class Relations
		{
			public const string WorkItemState = "WorkItemState";
			public const string BoardState = "BoardState";
			public const string BoardUser = "BoardUser";
			public const string IsUser = "IsUser";
		}
	}

	[SchemaNamespace]
	public class DomainProvider : INamespace
	{
		public string Name { get { return GetType().Namespace; } }
		public static string DomainName { get { return new DomainProvider().Name; } }
	}


	[DataDefinition(MustPersist = false)]
	public enum EnumUserStatus
	{
		[Description("Valid")]
		Valid,
		[Description("Blocked")]
		Blocked,
		[Description("Pending")]
		Pending
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
	public class User : Entity, IDataWrapper
	{
		public static partial class Fields
		{
			public const string Id = "Id";
			public const string FirstName = "FirstName";
			public const string LastName = "LastName";
			public const string Email = "Email";
			public const string Password = "Password";
			public const string VerificationCode = "VerificationCode";
			public const string DateLastLogin = "DateLastLogin";
			public const string Status = "Status";
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
		public string FirstName
		{
			get { return getValue<string>("FirstName"); }
			set { setValue<string>("FirstName", value); }
		}

		[Data(DefaultValue = "")]
		public string LastName
		{
			get { return getValue<string>("LastName"); }
			set { setValue<string>("LastName", value); }
		}

		[Data(DefaultValue = "")]
		public string Email
		{
			get { return getValue<string>("Email"); }
			set { setValue<string>("Email", value); }
		}

		[Data(DefaultValue = "", IsNullable = true, ServerOnly = true)]
[System.Xml.Serialization.XmlIgnore]
		public string Password
		{
			get { return getValue<string>("Password"); }
			set { setValue<string>("Password", value); }
		}

		[Data(IsNullable = true, ServerOnly = true)]
[System.Xml.Serialization.XmlIgnore]
		public Guid? VerificationCode
		{
			get { return getValue<Guid?>("VerificationCode"); }
			set { setValue<Guid?>("VerificationCode", value); }
		}

		[Data]
		public DateTime DateLastLogin
		{
			get { return getValue<DateTime>("DateLastLogin"); }
			set { setValue<DateTime>("DateLastLogin", value); }
		}

		[Data(DefaultValue = EnumUserStatus.Pending)]
		public EnumUserStatus Status
		{
			get { return getValue<EnumUserStatus>("Status"); }
			set { setValue<EnumUserStatus>("Status", value); }
		}

	}

	[DataDefinition(MustPersist = false)]
	public class CurrentUser : Entity, IDataWrapper
	{
		public static partial class Fields
		{
			public const string Id = "Id";
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

	[DataDefinition]
	public class BoardUser : DataWrapper, IDataWrapper, IRelation
	{
		public static partial class Fields
		{
			public const string IsOwner = "IsOwner";
		}

		void IDataWrapper.InitData(DataRow data, string namePrefix)
		{
			base.InitData(data, null);
		}

		[RelationEnd(Type = typeof(Board), Role = typeof(Board), Multiplicity = Multiplicity.ZeroOrMany)]
		public IEntity Board;

		[RelationEnd(Type = typeof(User), Role = typeof(User), Multiplicity = Multiplicity.ZeroOrMany)]
		public IEntity User;

		[Data(DefaultValue = true)]
		public bool IsOwner
		{
			get { return getValue<bool>("IsOwner"); }
			set { setValue<bool>("IsOwner", value); }
		}

	}

	[DataDefinition(MustPersist = false)]
	public class IsUser : DataWrapper, IDataWrapper, IRelation
	{
		void IDataWrapper.InitData(DataRow data, string namePrefix)
		{
			base.InitData(data, null);
		}

		[RelationEnd(Type = typeof(User), Role = typeof(User), Multiplicity = Multiplicity.One)]
		public IEntity User;

		[RelationEnd(Type = typeof(CurrentUser), Role = typeof(CurrentUser), Multiplicity = Multiplicity.ZeroOrOne)]
		public IEntity CurrentUser;

	}

}


  
