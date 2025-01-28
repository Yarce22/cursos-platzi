import { Category } from "./category.module";

export interface Product {
id: number,
title: string,
price: number,
description: string,
category: Category,
image: string[],
}
