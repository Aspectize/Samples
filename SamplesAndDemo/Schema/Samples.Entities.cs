
using System;
using System.Collections.Generic;
using System.Text;
using System.Data;
using System.ComponentModel;

using Aspectize.Core;

[assembly:AspectizeDALAssemblyAttribute]

namespace Samples
{
	public static partial class SchemaNames
	{
		public static partial class Entities
		{
			public const string ComplexLayoutTrace = "ComplexLayoutTrace";
			public const string TimerTrace = "TimerTrace";
			public const string CalendarEvent = "CalendarEvent";
		}
	}

	[SchemaNamespace]
	public class DomainProvider : INamespace
	{
		public string Name { get { return GetType().Namespace; } }
		public static string DomainName { get { return new DomainProvider().Name; } }
	}


	[DataDefinition(MustPersist = false)]
	public enum EnumCoreControl
	{
		[Description("List")]
		List,
		[Description("RadioButtons")]
		RadioButtons,
		[Description("CheckBoxList")]
		CheckBoxList,
		[Description("Image")]
		Image,
		[Description("Repeater")]
		Repeater,
		[Description("FileUpload")]
		FileUpload,
		[Description("Grid")]
		Grid,
		[Description("TreeView")]
		TreeView,
		[Description("Timer")]
		Timer
	}

	[DataDefinition(MustPersist = false)]
	public enum EnumProductOrderField
	{
		[Description("Name")]
		Name,
		[Description("ProductNumber")]
		ProductNumber
	}

	[DataDefinition(MustPersist = false)]
	public enum EnumPageSize
	{
		[Description("p10")]
		p10		 = 		10,
		[Description("p20")]
		p20		 = 		20,
		[Description("p50")]
		p50		 = 		50
	}

	[DataDefinition(MustPersist = false)]
	public enum EnumLayout
	{
		[Description("Panel")]
		Panel,
		[Description("Tab")]
		Tab,
		[Description("Dialog")]
		Dialog,
		[Description("Flyout")]
		Flyout,
		[Description("ComplexLayout")]
		ComplexLayout
	}

	[DataDefinition(MustPersist = false)]
	public enum EnumSamplePanelView
	{

	}

	[DataDefinition(MustPersist = false)]
	public enum EnumBootstrapExtension
	{
		[Description("BootstrapGrid")]
		BootstrapGrid,
		[Description("BootstrapTab")]
		BootstrapTab,
		[Description("BootstrapDatepicker")]
		BootstrapDatepicker,
		[Description("BootstrapModal")]
		BootstrapModal
	}

	[DataDefinition(MustPersist = false)]
	public enum EnumBootstrapTabOrientation
	{
		[Description("Normal")]
		Normal,
		[Description("tabs-left")]
		Left,
		[Description("tabs-right")]
		Right
	}

	[DataDefinition(MustPersist = false)]
	public enum EnumGoogleExtension
	{
		[Description("GoogleTable")]
		GoogleTable,
		[Description("GoogleLineChart")]
		GoogleLineChart,
		[Description("GoogleBarChart")]
		GoogleBarChart,
		[Description("GoogleMap")]
		GoogleMap,
		[Description("GooglePlace")]
		GooglePlace
	}

	[DataDefinition(MustPersist = false)]
	public enum EnumJQueryExtension
	{
		[Description("JQueryDatePicker")]
		JQueryDatePicker,
		[Description("JQueryAutoComplete")]
		JQueryAutoComplete,
		[Description("JQueryMask")]
		JQueryMask,
		[Description("JQueryRateIt")]
		JQueryRateIt
	}

	[DataDefinition(MustPersist = false)]
	public enum EnumMiscExtension
	{
		[Description("TinyMCE")]
		TinyMCE,
		[Description("FullCalendar")]
		FullCalendar
	}

	[DataDefinition(MustPersist = false)]
	public enum EnumDatePickerViewMode
	{
		[Description("days")]
		days,
		[Description("months")]
		months,
		[Description("years")]
		years,
		[Description("decades")]
		decades
	}

	[DataDefinition(MustPersist = false)]
	public enum EnumDhtmlxExtension
	{
		[Description("DhtmlxLineChart")]
		DhtmlxLineChart,
		[Description("DhtmlxPieChart")]
		DhtmlxPieChart,
		[Description("DhtmlxRadarChart")]
		DhtmlxRadarChart,
		[Description("DhtmlxBarChart")]
		DhtmlxBarChart
	}

	[DataDefinition(MustPersist = false)]
	public class ComplexLayoutTrace : Entity, IDataWrapper
	{
		public static partial class Fields
		{
			public const string Id = "Id";
			public const string DateEvent = "DateEvent";
			public const string Trace = "Trace";
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
		public DateTime DateEvent
		{
			get { return getValue<DateTime>("DateEvent"); }
			set { setValue<DateTime>("DateEvent", value); }
		}

		[Data]
		public string Trace
		{
			get { return getValue<string>("Trace"); }
			set { setValue<string>("Trace", value); }
		}

	}

	[DataDefinition(MustPersist = false)]
	public class TimerTrace : Entity, IDataWrapper
	{
		public static partial class Fields
		{
			public const string Id = "Id";
			public const string DateEvent = "DateEvent";
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
		public DateTime DateEvent
		{
			get { return getValue<DateTime>("DateEvent"); }
			set { setValue<DateTime>("DateEvent", value); }
		}

	}

	[DataDefinition(MustPersist = false)]
	public class CalendarEvent : Entity, IDataWrapper
	{
		public static partial class Fields
		{
			public const string Id = "Id";
			public const string DateStart = "DateStart";
			public const string DateEnd = "DateEnd";
			public const string Description = "Description";
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
		public DateTime DateStart
		{
			get { return getValue<DateTime>("DateStart"); }
			set { setValue<DateTime>("DateStart", value); }
		}

		[Data]
		public DateTime DateEnd
		{
			get { return getValue<DateTime>("DateEnd"); }
			set { setValue<DateTime>("DateEnd", value); }
		}

		[Data]
		public string Description
		{
			get { return getValue<string>("Description"); }
			set { setValue<string>("Description", value); }
		}

	}

}


  
