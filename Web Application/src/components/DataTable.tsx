import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Link from "next/link";

import D3Component from "./D3Component";

const columns: GridColDef<(typeof rows)[number]>[] = [
  {
    field: "id",
    headerName: "ID",
    width: 30,
    renderCell: (params) => (
      <Link href={`/stocks/${params.row.symbol}`}>{params.row.id}</Link>
    ),
  },
  {
    field: "company",
    headerName: "Company",
    width: 200,
    renderCell: (params) => (
      <Link href={`/stocks/${params.row.symbol}`}>{params.row.company}</Link>
    ),
  },
  {
    field: "plot",
    headerName: "Trend",
    width: 150,
    renderCell: (params) => (
      <Link href={`/stocks/${params.row.symbol}`}>
        <D3Component data={params.row.data} />
      </Link>
    ),
  },
  {
    field: "description",
    headerName: "Description",
    width: 250,
    renderCell: (params) => (
      <Link href={`/stocks/${params.row.symbol}`}>
        {params.row.description}
      </Link>
    ),
  },
  {
    field: "initialPrice",
    headerName: "Initial Price",
    type: "number",
    width: 100,
    renderCell: (params) => (
      <Link href={`/stocks/${params.row.symbol}`}>
        ${params.row.initialPrice}
      </Link>
    ),
  },
  {
    field: "price2002",
    headerName: "Price 2002",
    type: "number",
    width: 100,
    renderCell: (params) => (
      <Link href={`/stocks/${params.row.symbol}`}>${params.row.price2002}</Link>
    ),
  },
  {
    field: "price2007",
    headerName: "Price 2007",
    type: "number",
    width: 100,
    renderCell: (params) => (
      <Link href={`/stocks/${params.row.symbol}`}>${params.row.price2007}</Link>
    ),
  },
  {
    field: "symbol",
    headerName: "Symbol",
    width: 80,
    renderCell: (params) => (
      <Link href={`/stocks/${params.row.symbol}`}>{params.row.symbol}</Link>
    ),
  },
];

const rows = [
  {
    id: "1",
    company: "3M",
    description:
      "3M, based in Minnesota, may be best known for its Scotch tape and Post-It Notes, but it also produces sand paper, adhesives, medical products, computer screen filters, food safety items, stationery products and many products used in automotive, marine, and aircraft industries.",
    initialPrice: 44.28,
    price2002: 56.27,
    price2007: 95.85,
    symbol: "MMM",
    data: [15, 18, 9, 2, 16, 17, 10, 20],
  },
  {
    id: "2",
    company: "Amazon.com",
    description:
      "Amazon.com, Inc. is an online retailer in North America and internationally. The company serves consumers through its retail Web sites and focuses on selection, price, and convenience. It also offers programs that enable sellers to sell their products on its Web sites, and their own branded Web sites. In addition, the company serves developer customers through Amazon Web Services, which provides access to technology infrastructure that developers can use to enable virtually various type of business. Further, it manufactures and sells the Kindle e-reader. Founded in 1994 and headquartered in Seattle, Washington.",
    initialPrice: 89.38,
    price2002: 17.01,
    price2007: 93.43,
    symbol: "AMZN",
    data: [3, 15, 7, 8, 10, 11, 5, 16],
  },
  {
    id: "3",
    company: "Campbell Soup",
    description:
      "Campbell Soup is a worldwide food company, offering condensed and ready-to-serve soups; broth, stocks, and canned poultry; pasta sauces; Mexican sauces; canned pastas, gravies, and beans; juices and beverages; and tomato juices. Its customers include retail food chains, mass discounters, mass merchandisers, club stores, convenience stores, drug stores and other retail, and commercial and non-commercial establishments. Campbell Soup Company was founded in 1869 and is headquartered in Camden, New Jersey.",
    initialPrice: 37.0,
    price2002: 22.27,
    price2007: 36.4,
    symbol: "CPB",
    data: [14, 10, 12, 13, 2, 4, 9, 20],
  },
  {
    id: "4",
    company: "Disney",
    description:
      "The Walt Disney Company, founded in 1923, is a worldwide entertainment company, with movies, cable networks, radio networks, movie production, musical recordings and live stage plays. Disney also operates Walt Disney World in Florida and Disneyland in California, Disney Cruise Line, and international Disney resorts. Disney owns countless licenses and literary properties and publishes books and magazines.",
    initialPrice: 40.68,
    price2002: 15.24,
    price2007: 35.47,
    symbol: "DIS",
    data: [11, 19, 13, 17, 3, 18, 15, 10],
  },
  {
    id: "5",
    company: "Dow Chemical",
    description:
      "The Dow Chemical Company manufactures raw materials that go into consumer products and services. These materials include food and pharmaceutical ingredients, electronic displays, semiconductor packaging, water purification, insulation, adhesives, pest control, polyurethane, polystyrene (goes into plastics), and crude-oil based raw materials. Dow was founded in 1897 and is based in Midland, Michigan.",
    initialPrice: 38.83,
    price2002: 27.65,
    price2007: 44.67,
    symbol: "DOW",
    data: [7, 17, 13, 3, 20, 1, 10, 2],
  },
  {
    id: "6",
    company: "Exxon Mobil",
    description:
      "Exxon Mobil engages in the exploration and production of crude oil and natural gas, and manufacture of petroleum products. The company manufactures commodity petrochemicals. The company has operations in the United States, Canada/South America, Europe, Africa, Asia, and Australia/Oceania. Exxon Mobil Corporation was founded in1870 and is based in Irving, Texas.",
    initialPrice: 39.0,
    price2002: 32.82,
    price2007: 91.36,
    symbol: "XOM",
    data: [18, 16, 20, 3, 6, 4, 9, 5],
  },
  {
    id: "7",
    company: "Ford",
    description:
      "Ford Motor Co. develops, manufactures, sells and services vehicles and parts worldwide. Ford sells cars and trucks primarily under the Ford and Lincoln brands. It sells to consumers (through retail dealers) and to rental car companies, leasing companies, and governments. Ford also provides maintenance and repair services. Ford also offers financing to vehicle purchasers. Ford was founded in 1903 and is based in Dearborn, Michigan.",
    initialPrice: 27.34,
    price2002: 9.63,
    price2007: 8.37,
    symbol: "F",
    data: [17, 19, 1, 16, 8, 7, 6, 10],
  },
  {
    id: "8",
    company: "The Gap",
    description:
      "The Gap, Inc. sells retail clothing, accessories and personal care products globally under the brand names Gap, Old Navy, Banana Republic, Piperlime, Athleta and Intermix. Products include sports apparel, casual clothing, sleepwear, footwear and infants\u2019 and children\u2019s clothing. The company has company-owned stores as well as franchise stores, online stores and catalogs. The Gap was founded in 1969 and is headquartered in San Francisco, California.",
    initialPrice: 46.0,
    price2002: 11.56,
    price2007: 18.9,
    symbol: "GPS",
    data: [7, 6, 2, 4, 10, 15, 12, 8],
  },
  {
    id: "9",
    company: "General Mills",
    description:
      "General Mills manufactures and sells consumer foods worldwide. Products include cereals, frozen vegetables, dough, dessert and baking mixes, frozen pizzas, grains, fruits, ice creams and organic products. It sells to grocery stores as well as commercial food service distributors, restaurants and convenience stores. General Mills was founded in 1928 and is based in Minneapolis, Minnesota.",
    initialPrice: 15.59,
    price2002: 22.1,
    price2007: 28.76,
    symbol: "GIS",
    data: [3, 6, 14, 5, 17, 1, 7, 12],
  },
  {
    id: "10",
    company: "Hewlett Packard",
    description:
      "Hewlett-Packard designs and sells products, technologies, software and IT services to consumers, businesses, government and education sectors worldwide. HP offers storage and server products, PCs, calculators, printers, scanners, network infrastructure products, video products (under the Halo brand), and Palm smartphones. HP was founded in 1939 and is headquartered in Palo Alto, California.",
    initialPrice: 66.28,
    price2002: 12.03,
    price2007: 50.9,
    symbol: "HPQ",
    data: [2, 3, 6, 16, 19, 11, 4, 1],
  },
  {
    id: "11",
    company: "IBM",
    description:
      "IBM is an international IT company. IBM offers infrastructure and technology services, software for business integration and information management, data warehousing, identity management software, data security, Lotus software for collaboration, messaging and social networking, business intelligence software, servers, and storage systems. IBM was founded in 1910 and is based in Armonk, New York.",
    initialPrice: 118.37,
    price2002: 60.36,
    price2007: 116.3,
    symbol: "IBM",
    data: [2, 3, 6, 16, 19, 11, 4, 1],
  },
  {
    id: "12",
    company: "Johnson & Johnson",
    description:
      "Johnson & Johnson develops and manufactures health care products for sale worldwide. J&J products include the brands Johnson\u2019s, Aveeno, Clean & Clear, Neutrogena, Lubriderm, Listerine, Reach, BandAid, Tylenol, Sudafed, Motrin and more. J&J products are used in skin care, baby care, and therapeutic medical care, including inflammatory diseases, arthritis, psoriasis, HIV/AIDS, schizophrenia, spinal care, and diabetes. The company was founded in 1886 and is based in New Brunswick, New Jersey.",
    initialPrice: 35.13,
    price2002: 52.3,
    price2007: 66.25,
    symbol: "JNJ",
    data: [3, 6, 14, 5, 17, 1, 7, 12],
  },
  {
    id: "13",
    company: "Microsoft",
    description:
      "Microsoft develops, manufactures, licenses, and supports a range of software products and services for various computing devices worldwide. Products include Windows OS, Windows Live and Internet Explorer. Microsoft also provides training and tech support, online products such as Bing and MSN portals, and software including Microsoft Office, Microsoft SharePoint, Xbox 360, PC software games, online games, and Zune digital music. Microsoft was founded in 1975 and is headquartered in Redmond, Washington.",
    initialPrice: 55.72,
    price2002: 22.62,
    price2007: 29.84,
    symbol: "MSFT",
    data: [7, 6, 2, 4, 10, 15, 12, 8],
  },
  {
    id: "14",
    company: "Monsanto",
    description:
      "Monsanto provides agricultural products for farmers in the United States and internationally. It operates in two segments, Seeds and Genomics, and Agricultural Productivity. The Seeds and Genomics segment produces corn, soybean, canola, and cotton seeds, as well as vegetable seeds, including tomato, pepper, eggplant, melon, cucumber, pumpkin, squash, beans, broccoli, onions, and lettuce seeds. The Agricultural Productivity segment offers herbicides for agricultural, industrial, and residential use. Brands include Roundup, Roundup Ready, YieldGard, and Dekalb. Monsanto focuses on high-yielding crops and crops that tolerate adverse conditions. The current company was founded in 2000 (name dates to 1901) and is based in St. Louis, Missouri.",
    initialPrice: 11.47,
    price2002: 7.2,
    price2007: 86.93,
    symbol: "MO",
    data: [3, 6, 14, 5, 17, 1, 7, 12],
  },
  {
    id: "15",
    company: "PepsiCo",
    description:
      "PepsiCo, Inc. manufactures, markets, and sells various foods, snacks, and carbonated and non-carbonated beverages worldwide. Pepsi products include Pepsi beverages, Mountain Dew, Gatorade, Aquafina and Tropicana beverages as well as Frito-Lay snacks, Ruffles, Doritos, Tostitos, Rold Gold pretzels, Sun Chips, Crackerjack, Quaker Oats, Aunt Jemima mixes, Life Cereal, and Rice-a-Roni. The company was founded in 1898 and is headquartered in Purchase, New York.",
    initialPrice: 34.13,
    price2002: 36.69,
    price2007: 73.74,
    symbol: "PEP",
    data: [17, 19, 1, 16, 8, 7, 6, 10],
  },
];

export default function DataTable() {
  return (
    <Box sx={{ minHeight: "auto", width: "80%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
        sx={{ minHeight: "150px" }}
      />
    </Box>
  );
}
