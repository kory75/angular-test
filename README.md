# AngularTest

## Introduction

This is a simple web application which contains three entities; customers, products and orders. It uses the `angular/in-memory-web-api` library (see https://github.com/angular/in-memory-web-api) to mimic a database and api.

## Data

The following files are contained in the `data` folder

- `customer.ts`, `order.ts` and `product.ts` contain the types and dummy data for each entity.
- `app-data.ts` the setup for the `angular/in-memory-web-api`
- `api.service.ts` an Angular service which uses the `HttpClient` to retrieve data from the mock apis/

## Instructions

1. Display a list of orders in a table in the `app.component.ts` file, with the following headers

   - Order Id
   - Customer Name
   - Order Date (formatted as `dd/MM/yyyy`)
   - Product Name

2. Implement a select to filter orders by customer name. The select should

   - Should contain options for each of the customer names as well as an empty option.
   - The empty option should be initially selected.
   - When the empty option is selected all orders should be shown.
   - When a customer name option is selected the orders should be filtered by customer name

3. Change the `app.component.ts` change detection strategy to `ChangeDetectionStrategy.OnPush`. If you have done the previous tasks correctly the application should still work.

You will be assessed on your use of RxJs (hint: your code shouldn't use the subscribe method, use the async pipe), how you structure your code, your use of types and general best practices. You don't need to worry about the styling of the application. The test should take around an hour.
