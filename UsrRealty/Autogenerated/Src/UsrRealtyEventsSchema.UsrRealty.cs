namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrRealtyEventsSchema

	/// <exclude/>
	public class UsrRealtyEventsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrRealtyEventsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrRealtyEventsSchema(UsrRealtyEventsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("a7429448-90ba-4642-8660-7f75b7d10f51");
			Name = "UsrRealtyEvents";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("b03830be-bd21-47e0-8938-c904081b0c6e");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,82,77,107,219,64,16,189,27,252,31,6,145,131,4,97,73,174,73,27,168,93,183,4,66,91,34,57,151,144,195,122,53,86,182,236,135,216,89,57,117,131,255,123,87,90,203,182,82,17,178,39,105,246,205,155,247,102,159,225,26,169,230,2,161,64,231,56,217,181,103,115,107,214,178,106,28,247,210,154,233,228,117,2,208,144,52,21,228,91,242,168,175,167,16,206,161,120,218,167,181,53,239,92,59,100,11,227,165,151,72,31,67,177,197,6,141,63,130,31,187,139,109,87,189,147,65,140,65,151,230,226,25,53,255,17,140,192,103,72,150,228,238,145,43,191,77,178,167,190,173,110,86,74,10,16,138,19,65,188,29,33,130,43,152,113,194,145,155,158,231,181,251,216,255,28,104,237,38,136,151,37,194,198,202,18,126,154,156,111,130,165,212,174,126,163,240,64,104,74,116,231,16,105,103,184,14,254,58,242,47,174,34,192,108,72,121,156,112,40,1,172,130,42,118,224,237,9,49,187,30,3,199,57,224,58,151,97,33,105,44,100,177,109,180,165,68,33,53,87,80,59,41,218,29,198,94,246,29,125,177,173,177,156,91,213,104,243,192,85,131,159,246,208,155,180,221,243,175,22,191,204,191,38,227,74,228,26,210,72,121,3,151,23,253,201,6,152,163,95,100,183,52,231,70,160,194,50,104,240,174,193,81,86,0,242,174,141,76,200,45,241,10,11,212,181,226,190,213,109,240,5,238,172,224,74,254,229,43,133,121,135,75,247,110,150,132,46,4,219,132,55,9,169,102,247,72,182,113,34,128,172,11,44,231,39,193,137,153,75,66,233,63,50,98,221,26,110,169,176,118,38,171,248,151,100,172,176,251,97,39,155,24,202,12,242,98,129,125,179,78,115,159,190,145,31,166,93,178,139,217,217,219,93,14,156,251,103,103,95,58,155,139,63,2,235,214,72,207,51,254,4,187,97,186,118,125,144,119,211,201,238,31,99,150,206,210,250,3,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("a7e2c8bd-a332-2add-b640-0f930743ecd6"),
				Name = "ValueIsTooBig",
				CreatedInPackageId = new Guid("b03830be-bd21-47e0-8938-c904081b0c6e"),
				CreatedInSchemaUId = new Guid("a7429448-90ba-4642-8660-7f75b7d10f51"),
				ModifiedInSchemaUId = new Guid("a7429448-90ba-4642-8660-7f75b7d10f51")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("a7429448-90ba-4642-8660-7f75b7d10f51"));
		}

		#endregion

	}

	#endregion

}

