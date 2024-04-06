package com.trycatch.stockmarketapp.di

import com.trycatch.stockmarketapp.data.csv.CSVParser
import com.trycatch.stockmarketapp.data.csv.CompanyListingsParser
import com.trycatch.stockmarketapp.data.csv.IntradayInfoParser
import com.trycatch.stockmarketapp.data.repository.StockRepositoryImpl
import com.trycatch.stockmarketapp.domain.model.CompanyListing
import com.trycatch.stockmarketapp.domain.model.IntradayInfo
import com.trycatch.stockmarketapp.domain.repository.StockRepository
import dagger.Binds
import dagger.Module
import dagger.hilt.InstallIn
import dagger.hilt.components.SingletonComponent
import javax.inject.Singleton

@Module
@InstallIn(SingletonComponent::class)
abstract class RepositoryModule {

    /**
     * Burda hilte CSVParser<CompanyListing> interface sini kullanıyorsak bize bu companyListingsParser: CompanyListingsParser Sınıfını sağla
     */
    @Binds
    @Singleton
    abstract fun bindCompanyListingsParser(
        companyListingsParser: CompanyListingsParser,
    ): CSVParser<CompanyListing>

    @Binds
    @Singleton
    abstract fun bindIntradayInfoParser(
        intradayInfoParser: IntradayInfoParser,
    ): CSVParser<IntradayInfo>

    @Binds
    @Singleton
    abstract fun bindStockRepository(
        stockRepositoryImpl: StockRepositoryImpl
    ):StockRepository



}