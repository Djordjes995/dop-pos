import {
  CalculatedField,
  FieldList,
  Inject,
  PivotViewComponent
} from "@syncfusion/ej2-react-pivotview";
import { by_pos_and_sku } from '../assets/mock';

const ByPosAndSkuTable = () => {
  const data = by_pos_and_sku;

  let gridSettings = {
  };
  let pivotObj: any;

  const logInfo = (data) => {
    console.log(data)
  }

  return (
    <div className="p-2 box-border">
      <PivotViewComponent
        ref={d => pivotObj = d}
        gridSettings={gridSettings}
        cellTemplate={(args: any) => {
          console.log(args);
          if (args.targetCell.ariaColIndex === "1" && args.cellInfo.level === 0)
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
                <div
                  style={{ width: "120px", marginRight: '5px', height: "16px", background: "", lineHeight: 1 }}
                >
                  aman
                </div>
                <div
                  style={{ width: "120px",marginRight: '5px', height: "16px", background: "", lineHeight: 1 }}
                >
                  400
                </div>
                <div
                  style={{ width: "120px",marginRight: '5px', height: "16px", background: "", lineHeight: 1 }}
                >
                  neki
                </div>
                <div
                  style={{ width: "120px", marginRight: '5px',height: "16px", background: "", lineHeight: 1 }}
                >
                  kurac
                </div>
              </div>
            );
          else return;
        }}
        height={"100%"}
        width={"100%"}
        showFieldList={true}
        allowCalculatedField={true}
        dataSourceSettings={{
          dataSource: data,
          expandAll: false,
          filters: [],
          rows: [
            { name: "pos_name", caption: "POS Name" },
            { name: "sku_name", caption: "SKU Name" },
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
              name: "diff",
              caption: "Diff",
            },
            {
              name: "diff_perc",
              caption: "Diff Percentage",
            },
          ],
        }}
      >
        <Inject services={[FieldList, CalculatedField]}></Inject>
      </PivotViewComponent>
    </div>
  );
};

export default ByPosAndSkuTable;