package com.trycatch.stockmarketapp.presentation.company_listings

import android.content.Context
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Search
import androidx.compose.material3.Divider
import androidx.compose.material3.Icon
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.hilt.navigation.compose.hiltViewModel
import com.google.accompanist.swiperefresh.SwipeRefresh
import com.google.accompanist.swiperefresh.rememberSwipeRefreshState
import com.google.gson.stream.JsonReader
import com.trycatch.stockmarketapp.presentation.destinations.CompanyInfoScreenDestination
import com.ramcosta.composedestinations.annotation.Destination
import com.ramcosta.composedestinations.annotation.RootNavGraph
import com.ramcosta.composedestinations.navigation.DestinationsNavigator
import com.rhytham.ktorclient.Component.FilterChipGroup
import com.trycatch.stockmarketapp.ui.theme.BackgroundColor
import com.trycatch.stockmarketapp.ui.theme.TextWhite

import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.unit.sp
import com.trycatch.stockmarketapp.domain.model.CompanyListing
import org.json.JSONObject
import java.io.IOException
@RootNavGraph(start = true)
@Destination
@Composable
fun CompanyListingsScreen(
    navigator: DestinationsNavigator,
    viewModel: CompanyListingsViewModel = hiltViewModel(),
) {


    val state = viewModel.state
    val swipeRefreshState = rememberSwipeRefreshState(isRefreshing = state.isRefreshing)
    val array = mutableListOf<CompanyListing> (CompanyListing("HDFC","56.89","44.28"))


        array.add(CompanyListing("3M","MMM","49.28"))
    array.add(CompanyListing("Amazon.com","AMZN","89.38"))
    array.add(CompanyListing("Campbell Soup","CPB","40.68"))
    array.add(CompanyListing("Disney","DIS","38.83"))
    array.add(CompanyListing("Exxon Mobil","XOM","39.0"))
    array.add(CompanyListing("Ford","F","27.34"))
    array.add(CompanyListing("HDFC","Symbol","Excangr"))
    array.add(CompanyListing("HDFC","Symbol","Excangr"))


    Column(modifier = Modifier.fillMaxSize()) {
        Row(modifier = Modifier.padding(20.dp)) {

            Text(
                text ="Stock Up",
                fontSize = 22.sp,
                fontWeight = FontWeight.SemiBold,
                color = BackgroundColor
            )
        }
        OutlinedTextField(
            value = state.searchQuery,
            onValueChange = { viewModel.onEvent(CompanyListingsEvent.OnSearchQueryChange(it)) },
            modifier = Modifier
                .padding(16.dp)
                .fillMaxWidth(),
            singleLine = true,
            maxLines = 1,
            leadingIcon = { Icon(Icons.Filled.Search, contentDescription = null) },

            placeholder = { Text(text = "Search...") }

        )
        Row(modifier = Modifier.padding(20.dp)) {


            FilterChipGroup(items = listOf("PRICE", "MARKET CAP", "P/E RATIO"),
                onSelectedChanged = {

                })
        }
        Spacer(modifier = Modifier.size(30.dp))


        SwipeRefresh(
            state = swipeRefreshState,
            onRefresh = { viewModel.onEvent(CompanyListingsEvent.Refresh) }
        ) {
            LazyColumn(modifier = Modifier.fillMaxSize()) {
                items(array.size) { i ->
                    val company = array.get(i)
                    CompanyItem(
                        company = company, modifier = Modifier
                            .fillMaxWidth()
                            .clickable {
                                navigator.navigate(CompanyInfoScreenDestination(company.symbol))
                            }
                            .padding(4.dp)
                    )


                    if (i < state.companies.size) {
                        Divider(modifier = Modifier.padding(horizontal = 1.dp))
                    }
                }
            }
        }
    }



}

