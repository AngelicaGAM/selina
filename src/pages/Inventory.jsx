import { ProductsObj } from "../utils";
import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
export const Inventory = ((...rest) => {
  
  const [products, setProducts] = useState(ProductsObj);
  
  const styles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px"
  }

  const onRowEditComplete = (e) => {
    let _products = [...products];
    let { newData, index } = e;

    _products[index] = newData;

    setProducts(_products);
};
  return (
      <div style={styles} {...rest}>
          <DataTable value={products} editMode="row" dataKey="code" onRowEditComplete={onRowEditComplete} paginator rows={10} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '90rem' }}>
              <Column field="code" header="Codigo"></Column>
              <Column field="name" header="Nombre"></Column>
              <Column field="stock" header="Stock"></Column>
              <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>

          </DataTable>
      </div>
  );
});
