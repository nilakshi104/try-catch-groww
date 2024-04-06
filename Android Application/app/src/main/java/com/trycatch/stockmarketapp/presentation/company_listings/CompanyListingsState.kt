package com.trycatch.stockmarketapp.presentation.company_listings

import com.trycatch.stockmarketapp.domain.model.CompanyListing

data class CompanyListingsState(
    val companies:List<CompanyListing> = emptyList(),
    val isLoading:Boolean=false,
    val isRefreshing:Boolean=false,
    val searchQuery:String=""
)