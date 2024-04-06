package com.trycatch.stockmarketapp.presentation.company_listings

import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Checkbox
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.input.pointer.PointerIcon.Companion.Text
import androidx.compose.ui.unit.dp

@Composable
fun MultiSelectFilterChip(
    options: List<String>,
    onSelectionChanged: (List<String>) -> Unit
) {
    var selectedOptions by remember { mutableStateOf(emptyList<String>()) }

    Row {
        for (option in options) {
            Checkbox(
                checked = selectedOptions.contains(option),
                onCheckedChange = { isChecked ->
                    selectedOptions = if (isChecked) {
                        selectedOptions + option
                    } else {
                        selectedOptions - option
                    }
                    onSelectionChanged(selectedOptions)
                },
                modifier = Modifier.padding(horizontal = 4.dp)
            )
            Text(
                text = option,
                modifier = Modifier.padding(horizontal = 4.dp)
            )
        }
    }
}