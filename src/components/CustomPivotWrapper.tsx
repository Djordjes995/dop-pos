import { by_pos_and_sku } from '../assets/mock';
import React from 'react';
import PivotTable from './pivot/PivotTable';

const MyComponent = () => {
  const data = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Jane', age: 25 },
    { id: 3, name: 'Doe', age: 40 },
  ];

  const pivotData = [  {
    "id": "_px5i2zecu",
    "customer_sort_by_customer_id_asc": "1|Maxi 1|Maxi|Key Account|Mega Store",
    "item_field": "2|Grazie 15|Grazie|ICI",
    "customer_sort_by_pos_color_desc": "1|Maxi 1|Maxi|Mega Store",
    "suggested_amount": 197200,
    "order_amount": 211700,
    "diff": 14500,
    "diff_perc": 0.0735294118
},
{
    "id": "_8o5h19la1",
    "customer_sort_by_customer_id_asc": "98|Maxi 98|Maxi|Key Account|Grocery Self Service",
    "item_field": "2|Grazie 15|Grazie|ICI",
    "customer_sort_by_pos_color_desc": "98|Maxi 98|Maxi|Grocery Self Service",
    "suggested_amount": 116000,
    "order_amount": 130500,
    "diff": 14500,
    "diff_perc": 0.125
},
{
    "id": "_2gdlasu34",
    "customer_sort_by_customer_id_asc": "1|Maxi 1|Maxi|Key Account|Mega Store",
    "item_field": "12|Bel Desiderio 200g|Bel Desiderio|ICI",
    "customer_sort_by_pos_color_desc": "1|Maxi 1|Maxi|Mega Store",
    "suggested_amount": 50880,
    "order_amount": 64320,
    "diff": 13440,
    "diff_perc": 0.2641509434
},
{
    "id": "_1qrak6ys9",
    "customer_sort_by_customer_id_asc": "247|Trafikoni 12|Trafikoni|Local Chain|Grocery Counter",
    "item_field": "2|Grazie 15|Grazie|ICI",
    "customer_sort_by_pos_color_desc": "247|Trafikoni 12|Trafikoni|Grocery Counter",
    "suggested_amount": 20300,
    "order_amount": 29000,
    "diff": 8700,
    "diff_perc": 0.4285714286
},
{
    "id": "_glwfga2pg",
    "customer_sort_by_customer_id_asc": "1|Maxi 1|Maxi|Key Account|Mega Store",
    "item_field": "16|Bel Desiderio 200g Nocciola|Bel Desiderio|ICI",
    "customer_sort_by_pos_color_desc": "1|Maxi 1|Maxi|Mega Store",
    "suggested_amount": 62080,
    "order_amount": 70400,
    "diff": 8320,
    "diff_perc": 0.1340206186
},
{
    "id": "_qk650lrz1",
    "customer_sort_by_customer_id_asc": "1|Maxi 1|Maxi|Key Account|Mega Store",
    "item_field": "14|Bel Desiderio 200g Latte|Bel Desiderio|ICI",
    "customer_sort_by_pos_color_desc": "1|Maxi 1|Maxi|Mega Store",
    "suggested_amount": 63840,
    "order_amount": 71120,
    "diff": 7280,
    "diff_perc": 0.1140350877
},
{
    "id": "_0kcnwrr3q",
    "customer_sort_by_customer_id_asc": "113|Maxi 113|Maxi|Key Account|Grocery Self Service",
    "item_field": "4|Dolcezza 15|Dolcezza|ICI",
    "customer_sort_by_pos_color_desc": "113|Maxi 113|Maxi|Grocery Self Service",
    "suggested_amount": 22000,
    "order_amount": 28600,
    "diff": 6600,
    "diff_perc": 0.3
},
{
    "id": "_kj1mwyymy",
    "customer_sort_by_customer_id_asc": "227|Gomex 27|Gomex|Key Account|Grocery Self Service",
    "item_field": "4|Dolcezza 15|Dolcezza|ICI",
    "customer_sort_by_pos_color_desc": "227|Gomex 27|Gomex|Grocery Self Service",
    "suggested_amount": 28600,
    "order_amount": 35200,
    "diff": 6600,
    "diff_perc": 0.2307692308
},
{
    "id": "_yopsrfrzi",
    "customer_sort_by_customer_id_asc": "284|Banat Tade 14|Banat Tade|Local Chain|Grocery Self Service",
    "item_field": "4|Dolcezza 15|Dolcezza|ICI",
    "customer_sort_by_pos_color_desc": "284|Banat Tade 14|Banat Tade|Grocery Self Service",
    "suggested_amount": 24200,
    "order_amount": 30800,
    "diff": 6600,
    "diff_perc": 0.2727272727
},
{
    "id": "_ok8723ss6",
    "customer_sort_by_customer_id_asc": "444|Krivi Jasen|Krivi Jasen|General Trade|Grocery Self Service",
    "item_field": "4|Dolcezza 15|Dolcezza|ICI",
    "customer_sort_by_pos_color_desc": "444|Krivi Jasen|Krivi Jasen|Grocery Self Service",
    "suggested_amount": 72600,
    "order_amount": 79200,
    "diff": 6600,
    "diff_perc": 0.0909090909
},
{
    "id": "_2z3nevt15",
    "customer_sort_by_customer_id_asc": "421|KSJ|KSJ|General Trade|Grocery Self Service",
    "item_field": "12|Bel Desiderio 200g|Bel Desiderio|ICI",
    "customer_sort_by_pos_color_desc": "421|KSJ|KSJ|Grocery Self Service",
    "suggested_amount": 19680,
    "order_amount": 25920,
    "diff": 6240,
    "diff_perc": 0.3170731707
},]

  return (
    <div>
      <h1>My Pivot Table</h1>
      <PivotTable
        data={pivotData}
      />
    </div>
  );
};

export default MyComponent;