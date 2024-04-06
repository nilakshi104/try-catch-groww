package com.trycatch.stockmarketapp.presentation.company_listings

import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import com.trycatch.stockmarketapp.R
import com.trycatch.stockmarketapp.domain.model.CompanyListing
import com.trycatch.stockmarketapp.ui.theme.BackgroundColor

@Composable
fun CompanyItem(
    company: CompanyListing,
    modifier: Modifier = Modifier,
) {
    Row(
        modifier = modifier,
        verticalAlignment = Alignment.CenterVertically

    ) {
        Column(modifier.weight(1f)) {
            Row(modifier = Modifier.fillMaxWidth()
            ) {
                Text(
                    text = company.name,
                    fontWeight = FontWeight.SemiBold,
                    color = BackgroundColor,
                    overflow = TextOverflow.Ellipsis,
                    maxLines = 1,
                    modifier = Modifier.weight(1f)
                )
                Spacer(modifier = Modifier.width(4.dp))
                val str1: Double = java.lang.Double.valueOf(company.exchange)

                if(str1<=40)
                Image(
                    painter = painterResource(id = R.drawable.decrease_6067145),
                    contentDescription = "Image Icon",
                    modifier = Modifier.size(18.dp) // Adjust the size as needed
                )
                else{
                    Image(
                        painter = painterResource(id = R.drawable.increase_4721635),
                        contentDescription = "Image Icon",
                        modifier = Modifier.size(18.dp) // Adjust the size as needed
                    )
                }
                Text(
                    text = company.exchange,
                    fontWeight = FontWeight.Light,
                    color = BackgroundColor
                )

            }
            Spacer(modifier = Modifier.height(8.dp))

            Text(
                text = "(${company.symbol})",
                fontStyle = FontStyle.Normal,
                color = MaterialTheme.colorScheme.onBackground
            )
        }

    }

}