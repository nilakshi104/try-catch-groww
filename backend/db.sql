CREATE TABLE bqmxzg6g69sv3tzom8zw.Companies (
    CompanyID INT PRIMARY KEY AUTO_INCREMENT,
    Symbol VARCHAR(10) UNIQUE NOT NULL,
    CompanyName VARCHAR(255) NOT NULL
);

CREATE TABLE bqmxzg6g69sv3tzom8zw.FundamentalMetrics (
--    MetricID INT PRIMARY KEY AUTO_INCREMENT,
    CompanyID INT,
    Date DATE NOT NULL,
    MarketCap DECIMAL(20, 2),
    Revenue DECIMAL(20, 2),
    EarningsPerShare DECIMAL(10, 2),
    PriceToEarningsRatio DECIMAL(10, 2),
    DividendYield DECIMAL(10, 2),
    PRIMARY KEY (CompanyID),
    FOREIGN KEY (CompanyID) REFERENCES Companies(CompanyID)
);

CREATE TABLE bqmxzg6g69sv3tzom8zw.DailyStockData (
    CompanyID INT PRIMARY KEY,
    Date DATE NOT NULL,
    OpenPrice DECIMAL(10, 2),
    ClosePrice DECIMAL(10, 2),
    HighPrice DECIMAL(10, 2),
    LowPrice DECIMAL(10, 2),
    Volume INT
);

CREATE TABLE bqmxzg6g69sv3tzom8zw.WeeklyStockData (
    CompanyID INT PRIMARY KEY,
    WeekStartDate DATE NOT NULL,
    OpenPrice DECIMAL(10, 2),
    ClosePrice DECIMAL(10, 2),
    HighPrice DECIMAL(10, 2),
    LowPrice DECIMAL(10, 2),
    Volume INT
);

CREATE TABLE bqmxzg6g69sv3tzom8zw.MonthlyStockData (
    CompanyID INT ,
    MonthStartDate VARCHAR(255) NOT NULL,
    OpenPrice DECIMAL(10, 2),
    ClosePrice DECIMAL(10, 2),
    HighPrice DECIMAL(10, 2),
    LowPrice DECIMAL(10, 2),
    Volume INT
);

INSERT INTO bqmxzg6g69sv3tzom8zw.MonthlyStockData (CompanyID, MonthStartDate, OpenPrice, ClosePrice, HighPrice, LowPrice, Volume)
VALUES
    (5, '2024-02-01', 130.50, 105.25, 110.75, 93.25, 12000),
    (6, '2024-02-01', 165.00, 110.75, 112.50, 12.00, 16000),
    (7, '2024-02-01', 54.25, 52.75, 54.25, 42.50, 5600),
    (8, '2024-02-01', 52.50, 55.00, 56.75, 50.00, 7000),
    (9, '2024-02-01', 51.50, 55.00, 56.75, 51.00, 9000);