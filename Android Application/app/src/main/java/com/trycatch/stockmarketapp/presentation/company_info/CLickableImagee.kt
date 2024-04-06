package com.trycatch.stockmarketapp.presentation.company_info

import androidx.compose.foundation.Image
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.size
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.dp
import com.trycatch.stockmarketapp.R

@Composable
fun ClickableImage(onClick: () -> Unit) {
    Image(
        painter = painterResource(id = R.drawable.filter),
        contentDescription = "My Image",
        modifier = Modifier
            .size(200.dp) // You can adjust the size as needed
            .clickable(onClick = onClick)
    )
}