package com.trycatch.stockmarketapp.data.mapper

import com.trycatch.stockmarketapp.data.local.CompanyListingEntity
import com.trycatch.stockmarketapp.data.remote.dto.CompanyInfoDto
import com.trycatch.stockmarketapp.domain.model.CompanyInfo
import com.trycatch.stockmarketapp.domain.model.CompanyListing

fun CompanyListingEntity.toCompanyListing():CompanyListing{
    return CompanyListing(
       name =  name,
        symbol = symbol,
        exchange = exchange
    )
}

fun CompanyListing.toCompanyListingEntity():CompanyListingEntity{
    return CompanyListingEntity(
        name =  name,
        symbol = symbol,
        exchange = exchange
    )
}

 fun CompanyInfoDto.toCompanyInfo():CompanyInfo{
     return CompanyInfo(
         symbol ?:"",
         description ?:"",
         name ?:"",
         country ?:"",
         industry ?:""
     )
 }
