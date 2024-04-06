package com.trycatch.stockmarketapp.presentation.company_info

import com.trycatch.stockmarketapp.domain.model.CompanyInfo
import com.trycatch.stockmarketapp.domain.model.IntradayInfo

data class CompanyInfoState(
    val stockInfos:List<IntradayInfo> = emptyList(),
    val company:CompanyInfo?=null,
    val isLoading:Boolean=false,
    val error:String?=null
)
