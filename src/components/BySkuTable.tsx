import {
  CalculatedField,
  FieldList,
  Inject,
  PivotViewComponent,
  ConditionalFormatting
} from "@syncfusion/ej2-react-pivotview";
import { by_pos_and_sku } from '../assets/mock';
import { useState } from 'react';
import { IconButton, SvgIcon } from "@mui/material";
import Bars3Icon from '@heroicons/react/24/solid/Bars3Icon';

const ByPosAndSkuTable = () => {
  const data = by_pos_and_sku;
  const [tableRows, setTableRows] = useState([
    { name: "customer_sort_by_pos_color_desc", caption: "POS Name", dataType: 'number' },
    { name: "item_field", caption: "SKU Name" },
  ])

  let gridSettings = {
  };
  let pivotObj: any;

  const setSorting = () => {
    setTableRows((prevDataArray) => {
      return prevDataArray.map((obj, index) => {
        if (index === 0) {
          // Create a new object with the updated property
          return { ...obj, name: 'customer_sort_by_customer_id_asc' };
        }
        // If it's not the object to be updated, return the original object
        return obj;
      });
    });
  };

  const logInfo = (info) => {
    console.log(info)
  }

  const splitPosName = (name: String): String[] => {
    return name.split('|')
  }

  return (
    <div className="p-2 box-border">
      <IconButton onClick={setSorting}>
        <SvgIcon fontSize="medium">
          <Bars3Icon />
        </SvgIcon>
      </IconButton>
      <PivotViewComponent
        ref={d => pivotObj = d}
        gridSettings={gridSettings}
        cellTemplate={(args: any) => {
          if (args.targetCell.ariaColIndex === "1" && args.cellInfo.level < 2)
            return (
              <div onClick={() => logInfo(args)} style={{
                display: "flex",
                background: "white",
                position: "absolute",
                top: 8,
                left: 21,
                right: 21,
                bottom: 0,
              }}>
                {splitPosName(args.cellInfo.actualText).map((item, index) => {
                  return <div
                    key={index}
                    title={`${item}`}
                    style={{
                      width: '33.3%',
                      marginRight: '5px',
                      height: '16px',
                      background: '#fff',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                      lineHeight: 1,
                      display: index === 0 ? 'none' : 'block'
                    }}>
                    {item}
                  </div>
                })}
              </div>
            );
          else return;
        }}
        height={"100%"}
        width={"100%"}
        showFieldList={true}
        allowCalculatedField={true}
        allowConditionalFormatting={true}
        dataSourceSettings={{
          dataSource: data,
          expandAll: false,
          filters: [],
          formatSettings: [{ name: 'diff_percentage', format: 'p2' }],
          rows: tableRows,
          conditionalFormatSettings: [
            {
              measure: 'diff_percentage',
              value1: -0.05,
              value2: -0.3,
              conditions: 'Between',
              style: {
                // main warning color
                backgroundColor: '#F79009',
                color: 'white',
                fontFamily: 'Tahoma',
                fontSize: '12px'
              }
            },
            {
              measure: 'diff_percentage',
              value1: -0.3,
              conditions: 'LessThan',
              style: {
                // main error color
                backgroundColor: '#F04438',
                color: 'white',
                fontFamily: 'Tahoma',
                fontSize: '12px'
              }
            },
            {
              measure: 'diff_percentage',
              value1: 0.05,
              conditions: 'GreaterThan',
              style: {
                // main success color
                backgroundColor: '#10B981',
                color: 'white',
                fontFamily: 'Tahoma',
                fontSize: '12px'
              }
            },
            {
              measure: 'diff_percentage',
              value1: -0.049,
              value2: 0.049,
              conditions: 'Between',
              style: {
                // main info color
                backgroundColor: '#06AED4',
                color: 'white',
                fontFamily: 'Tahoma',
                fontSize: '12px'
              }
            },
          ],
          values: [
            {
              name: "suggested_amount",
              caption: "Suggested"
            },
            {
              name: "order_amount",
              caption: "Order Amount",
            },
            {
              name: 'diff',
              caption: 'Diff',
              type: 'CalculatedField'
            },
            {
              name: 'diff_percentage',
              caption: 'Diff Percentage',
              type: 'CalculatedField'
            },
          ],
          calculatedFieldSettings: [
            {
              name: 'diff',
              formula: '"Sum(order_amount)"-"Sum(suggested_amount)"'
            },
            {
              name: 'diff_percentage',
              formula: '"Sum(order_amount)"/"Sum(suggested_amount)"-1'
            }
          ]
        }}
      >
        <Inject services={[FieldList, CalculatedField, ConditionalFormatting]}></Inject>
      </PivotViewComponent>
    </div>
  );
};

export default ByPosAndSkuTable;