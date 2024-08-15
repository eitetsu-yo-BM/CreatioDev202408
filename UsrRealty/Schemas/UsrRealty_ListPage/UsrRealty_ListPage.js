define("UsrRealty_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealty"
						}
					}
				}
			},
			{
				"operation": "remove",
				"name": "SearchFilter",
				"properties": [
					"targetAttributes"
				]
			},
			{
				"operation": "merge",
				"name": "SearchFilter",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "SearchFilter_Items",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"Items"
										]
									}
								]
							}
						],
						"from": [
							"SearchFilter_SearchValue",
							"SearchFilter_FilteredColumnsGroups"
						]
					}
				}
			},
			{
				"operation": "merge",
				"name": "FolderTree",
				"values": {
					"rootSchemaName": "UsrRealty"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_UsrName",
							"caption": "#ResourceString(PDS_UsrName)#",
							"dataValueType": 1,
							"width": 164
						},
						{
							"id": "608fc9c6-1663-88da-1da3-e871a0256e03",
							"code": "PDS_UsrPriceUSD",
							"caption": "#ResourceString(PDS_UsrPriceUSD)#",
							"dataValueType": 32
						},
						{
							"id": "2dc4e000-42e2-9403-3cf0-e7fbd4d61120",
							"code": "PDS_UsrArea",
							"caption": "#ResourceString(PDS_UsrArea)#",
							"dataValueType": 32
						},
						{
							"id": "6694b6fd-22da-2211-9b6d-85d7f0d7fe18",
							"code": "PDS_UsrType",
							"caption": "#ResourceString(PDS_UsrType)#",
							"dataValueType": 10,
							"width": 121
						},
						{
							"id": "783fa373-bb82-5767-78de-57c82fa6d95a",
							"code": "PDS_UsrOfferType",
							"caption": "#ResourceString(PDS_UsrOfferType)#",
							"dataValueType": 10,
							"width": 130
						},
						{
							"id": "cdb8a451-aaa3-c7f6-19cf-574ed963dea0",
							"code": "PDS_CreatedOn",
							"caption": "#ResourceString(PDS_CreatedOn)#",
							"dataValueType": 7
						}
					]
				}
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrPriceUSD": {
						"modelConfig": {
							"path": "PDS.UsrPriceUSD"
						}
					},
					"PDS_UsrArea": {
						"modelConfig": {
							"path": "PDS.UsrArea"
						}
					},
					"PDS_UsrType": {
						"modelConfig": {
							"path": "PDS.UsrType"
						}
					},
					"PDS_UsrOfferType": {
						"modelConfig": {
							"path": "PDS.UsrOfferType"
						}
					},
					"PDS_CreatedOn": {
						"modelConfig": {
							"path": "PDS.CreatedOn"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"loadOnChange": true,
							"name": "FolderTree_active_folder_filter"
						},
						{
							"name": "Items_PredefinedFilter",
							"loadOnChange": true
						},
						{
							"name": "LookupQuickFilterByTag_Items",
							"loadOnChange": true
						},
						{
							"name": "SearchFilter_Items",
							"loadOnChange": true
						}
					]
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config"
				],
				"values": {
					"entitySchemaName": "UsrRealty",
					"attributes": {
						"UsrName": {
							"path": "UsrName"
						},
						"UsrPriceUSD": {
							"path": "UsrPriceUSD"
						},
						"UsrArea": {
							"path": "UsrArea"
						},
						"UsrType": {
							"path": "UsrType"
						},
						"UsrOfferType": {
							"path": "UsrOfferType"
						},
						"CreatedOn": {
							"path": "CreatedOn"
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});