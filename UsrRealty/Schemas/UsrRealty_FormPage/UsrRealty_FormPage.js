define("UsrRealty_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTabContainer",
				"values": {
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrRealty"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "8b9d01b0-3d94-43de-b20c-0bc5ee1bd830",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "Button_0ey0joo",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_0ey0joo_caption)#",
					"color": "default",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"menuItems": [],
					"clickMode": "menu",
					"visible": true,
					"icon": "actions-button-icon"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CalculateAvgPrice",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(CalculateAvgPrice_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrCalculateRealtyAveragePriceProcess",
							"processRunType": "ForTheSelectedPage",
							"showNotification": true,
							"recordIdProcessParameterName": "RealtyId"
						}
					},
					"icon": "calculator-icon"
				},
				"parentName": "Button_0ey0joo",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PushMeButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_wxb3xj5_caption)#",
					"color": "default",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "process-button-icon",
					"clicked": {
						"request": "usr.PushButtonRequest"
					},
					"clickMode": "default"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PriceUSD",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPriceUSD_vfy36iu",
					"labelPosition": "auto",
					"control": "$PDS_UsrPriceUSD_vfy36iu"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Area",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrArea_z824zj0",
					"labelPosition": "auto",
					"control": "$PDS_UsrArea_z824zj0"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Commission",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrCommissionUSD_fgw6f08",
					"labelPosition": "auto",
					"control": "$PDS_UsrCommissionUSD_fgw6f08"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "RealtyType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrType_lt8szx6",
					"labelPosition": "auto",
					"control": "$PDS_UsrType_lt8szx6",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": "$RealtyType_ValueDetails"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_4t0hqcc",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_4t0hqcc_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "RealtyType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OfferType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrOfferType_bae6dcc",
					"labelPosition": "auto",
					"control": "$PDS_UsrOfferType_bae6dcc",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_fg9g183",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_fg9g183_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "OfferType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Comment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComment_f5sq928",
					"labelPosition": "auto",
					"control": "$PDS_UsrComment_f5sq928",
					"multiline": false,
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "CommissionPercent",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrOfferTypeUsrCommissionPercent",
					"control": "$PDS_UsrOfferTypeUsrCommissionPercent",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UsrNumber",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrNumber_0dage1j",
					"labelPosition": "auto",
					"control": "$PDS_UsrNumber_0dage1j",
					"multiline": false,
					"readonly": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Manager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager_w3q3nh2",
					"labelPosition": "auto",
					"control": "$PDS_UsrManager_w3q3nh2",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "addRecord_cvye4fi",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_cvye4fi_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Manager",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Region",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrRegion_ye7lzpk",
					"labelPosition": "auto",
					"control": "$PDS_UsrRegion_ye7lzpk",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "addRecord_aswl93u",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_aswl93u_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Region",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "City",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCity_6ohaloi",
					"labelPosition": "auto",
					"control": "$PDS_UsrCity_6ohaloi",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "addRecord_5tolke4",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_5tolke4_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "City",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_usd8d8x",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_usd8d8x_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_7sbv8jh",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_usd8d8x",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_cb02hdg",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_7sbv8jh",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_gcqqf72",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_gcqqf72_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrRealtyVisit",
							"defaultValues": [
								{
									"attributeName": "UsrParentRealty",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_cb02hdg",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_ti7v8yb",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_ti7v8yb_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_ncjsid4DS"
						}
					}
				},
				"parentName": "FlexContainer_cb02hdg",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_9d4jwde",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_9d4jwde_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_cb02hdg",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_pn0bphl",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_pn0bphl_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "RealtyVisitGrid"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_9d4jwde",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_jrmxv5w",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_jrmxv5w_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealtyVisit"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_9d4jwde",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_xok93og",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_xok93og_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_xok93og_GridDetail_ncjsid4",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_ncjsid4"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_xok93og_SearchValue",
							"GridDetailSearchFilter_xok93og_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_cb02hdg",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_0gkmefz",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_usd8d8x",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RealtyVisitGrid",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": true,
							"itemsCreation": false
						}
					},
					"items": "$GridDetail_ncjsid4",
					"activeRow": "$GridDetail_ncjsid4_ActiveRow",
					"selectionState": "$GridDetail_ncjsid4_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_ncjsid4_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_ncjsid4DS_Id",
					"columns": [
						{
							"id": "ad9869a4-463c-3768-f9f6-768345e6cd2e",
							"code": "GridDetail_ncjsid4DS_UsrPotentialCustomer",
							"caption": "#ResourceString(GridDetail_ncjsid4DS_UsrPotentialCustomer)#",
							"dataValueType": 10
						},
						{
							"id": "d231b038-2a7f-86c2-6217-5d2ae5012543",
							"code": "GridDetail_ncjsid4DS_UsrComment",
							"caption": "#ResourceString(GridDetail_ncjsid4DS_UsrComment)#",
							"dataValueType": 28,
							"width": 157
						},
						{
							"id": "5566d1f4-55f4-8806-6a60-9ec9f5357ba6",
							"code": "GridDetail_ncjsid4DS_UsrParentRealty",
							"caption": "#ResourceString(GridDetail_ncjsid4DS_UsrParentRealty)#",
							"dataValueType": 10
						},
						{
							"id": "65bead44-0c39-0ceb-4ef2-816f9df35414",
							"code": "GridDetail_ncjsid4DS_UsrVisitDateTime",
							"caption": "#ResourceString(GridDetail_ncjsid4DS_UsrVisitDateTime)#",
							"dataValueType": 7
						},
						{
							"id": "77da70c5-dd59-9f65-bdc9-3fcfb6702db9",
							"code": "GridDetail_ncjsid4DS_CreatedOn",
							"caption": "#ResourceString(GridDetail_ncjsid4DS_CreatedOn)#",
							"dataValueType": 7,
							"width": 146
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_0gkmefz",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_ncjsid4_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_ncjsid4DS",
							"filters": "$GridDetail_ncjsid4 | crt.ToCollectionFilters : 'GridDetail_ncjsid4' : $GridDetail_ncjsid4_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_ncjsid4_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "RealtyVisitGrid",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_ncjsid4_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_ncjsid4DS",
							"filters": "$GridDetail_ncjsid4 | crt.ToCollectionFilters : 'GridDetail_ncjsid4' : $GridDetail_ncjsid4_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_ncjsid4_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_ncjsid4_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_ncjsid4_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "RealtyVisitGrid",
							"filters": "$GridDetail_ncjsid4 | crt.ToCollectionFilters : 'GridDetail_ncjsid4' : $GridDetail_ncjsid4_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_ncjsid4_SelectionState"
						}
					}
				},
				"parentName": "RealtyVisitGrid",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_ncjsid4_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_ncjsid4DS",
							"filters": "$GridDetail_ncjsid4 | crt.ToCollectionFilters : 'GridDetail_ncjsid4' : $GridDetail_ncjsid4_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_ncjsid4_SelectionState"
						}
					}
				},
				"parentName": "RealtyVisitGrid",
				"propertyName": "bulkActions",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrPriceUSD_vfy36iu": {
						"modelConfig": {
							"path": "PDS.UsrPriceUSD"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 100,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrArea_z824zj0": {
						"modelConfig": {
							"path": "PDS.UsrArea"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 50,
									"message": "#ResourceString(AreaCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrType_lt8szx6": {
						"modelConfig": {
							"path": "PDS.UsrType"
						}
					},
					"PDS_UsrOfferType_bae6dcc": {
						"modelConfig": {
							"path": "PDS.UsrOfferType"
						}
					},
					"PDS_UsrManager_w3q3nh2": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrComment_f5sq928": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						}
					},
					"PDS_UsrNumber_0dage1j": {
						"modelConfig": {
							"path": "PDS.UsrNumber"
						}
					},
					"PDS_UsrOfferTypeUsrCommissionPercent": {
						"modelConfig": {
							"path": "PDS.UsrOfferTypeUsrCommissionPercent"
						}
					},
					"PDS_UsrCommissionUSD_fgw6f08": {
						"modelConfig": {
							"path": "PDS.UsrCommissionUSD"
						}
					},
					"PDS_UsrRegion_ye7lzpk": {
						"modelConfig": {
							"path": "PDS.UsrRegion"
						}
					},
					"PDS_UsrCity_6ohaloi": {
						"modelConfig": {
							"path": "PDS.UsrCity"
						}
					},
					"GridDetail_ncjsid4": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_ncjsid4DS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_xok93og_GridDetail_ncjsid4",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_ncjsid4DS_UsrPotentialCustomer": {
									"modelConfig": {
										"path": "GridDetail_ncjsid4DS.UsrPotentialCustomer"
									}
								},
								"GridDetail_ncjsid4DS_UsrComment": {
									"modelConfig": {
										"path": "GridDetail_ncjsid4DS.UsrComment"
									}
								},
								"GridDetail_ncjsid4DS_UsrParentRealty": {
									"modelConfig": {
										"path": "GridDetail_ncjsid4DS.UsrParentRealty"
									}
								},
								"GridDetail_ncjsid4DS_UsrVisitDateTime": {
									"modelConfig": {
										"path": "GridDetail_ncjsid4DS.UsrVisitDateTime"
									}
								},
								"GridDetail_ncjsid4DS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_ncjsid4DS.CreatedOn"
									}
								},
								"GridDetail_ncjsid4DS_Id": {
									"modelConfig": {
										"path": "GridDetail_ncjsid4DS.Id"
									}
								}
							}
						}
					},
					"RealtyType_ValueDetails": {
						"modelConfig": {
							"path": "PDS.UsrTypeDescription"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_ncjsid4DS": [
							{
								"attributePath": "UsrParentRealty",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrRealty",
							"attributes": {
								"UsrOfferTypeUsrCommissionPercent": {
									"path": "UsrOfferType.UsrCommissionPercent",
									"type": "ForwardReference"
								},
								"UsrTypeDescription": {
									"path": "UsrType.Description",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_ncjsid4DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrRealtyVisit",
							"attributes": {
								"UsrPotentialCustomer": {
									"path": "UsrPotentialCustomer"
								},
								"UsrComment": {
									"path": "UsrComment"
								},
								"UsrParentRealty": {
									"path": "UsrParentRealty"
								},
								"UsrVisitDateTime": {
									"path": "UsrVisitDateTime"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
         {
            request: "usr.PushButtonRequest",	
            /* Implementation of the custom query handler. */				
            handler: async (request, next) => {					
              console.log("Button works...");					             
              Terrasoft.showInformation("My button was pressed.");					
              var price = await request.$context.PDS_UsrPriceUSD_vfy36iu;					
              console.log("Price = " + price);					              
              request.$context.PDS_UsrArea_z824zj0 = price * 0.5;					            
              /* Call the next handler if it exists and return its result. */					
              return next?.handle(request);	
            }
          },
          {
           request: "crt.HandleViewModelAttributeChangeRequest",
           handler: async (request, next) => {
             /* if price changed or percent changed */
             if (request.attributeName === 'PDS_UsrPriceUSD_vfy36iu' || request.attributeName === 'PDS_UsrOfferTypeUsrCommissionPercent') {	       
               var price = await request.$context.PDS_UsrPriceUSD_vfy36iu;						
               var percent = await request.$context.PDS_UsrOfferTypeUsrCommissionPercent;
               var commission = price * percent / 100;
               request.$context.PDS_UsrCommissionUSD_fgw6f08 = commission;
             }		
             /* Call the next handler if it exists and return its result. */		
             return next?.handle(request);
           }
         }
        ]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
          /* The validator type must contain a vendor prefix.			
             Format the validator type in PascalCase. */			
          "usr.DGValidator": {				
            validator: function (config) {					
              return function (control) {						
                let value = control.value;						
                let minValue = config.minValue;						
                let valueIsCorrect = value >= minValue;						
                var result;						
                if (valueIsCorrect) {							
                  result = null;					
                } else {						
                  result = {							
                    "usr.DGValidator": { 									
                      message: config.message								
                    }							
                  };						
                }		
                return result;				
              };	
            },			
            params: [			
              {						
                name: "minValue"					
              },				
              {						
                name: "message"				
              }				
            ],				
            async: false			
          }		
        }/**SCHEMA_VALIDATORS*/
	};
});