package com.trycatch.stockmarketapp.domain.repository

import com.trycatch.stockmarketapp.domain.model.CompanyInfo
import com.trycatch.stockmarketapp.domain.model.CompanyListing
import com.trycatch.stockmarketapp.domain.model.IntradayInfo
import com.trycatch.stockmarketapp.util.Resource
import kotlinx.coroutines.flow.Flow

interface StockRepository {

    suspend fun getCompanyListings(fetchFromApi:Boolean, query: String):Flow<Resource<List<CompanyListing>>>

    suspend fun getIntradayInfo(symbol:String):Resource<List<IntradayInfo>>

    suspend fun getCompanyInfo(symbol: String):Resource<CompanyInfo>
}