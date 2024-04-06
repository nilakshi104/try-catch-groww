package com.trycatch.stockmarketapp.presentation.company_info

import com.trycatch.stockmarketapp.domain.model.CompanyListing
import org.json.JSONArray
import org.json.JSONObject
object Data {

    val array = mutableListOf<CompanyListing> (CompanyListing("HDFC","Symbol","Excangr"))

    init {
        array.add(CompanyListing("HDFC","Symbol","Excangr"))

    }
}
