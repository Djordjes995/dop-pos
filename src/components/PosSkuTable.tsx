import {
    CalculatedField,
    FieldList,
    Inject,
    PivotViewComponent,
} from "@syncfusion/ej2-react-pivotview";
import { by_pos_and_sku } from '../assets/mock'

const PosSkuTable = () => {
    const data = by_pos_and_sku;

    return (
        <div className="p-2 box-border">
            <PivotViewComponent
                height={"auto"}
                width={"100%"}
                showFieldList={true}
                allowCalculatedField={true}
                dataSourceSettings={{
                    dataSource: data,
                    rows: [
                        { name: "pos_name", caption: "POS Name" },
                        { name: "sku_name", caption: "SKU Name" },
                    ],
                    values: [
                        { name: "suggested_amount", caption: "Suggested" },
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

export default PosSkuTable;