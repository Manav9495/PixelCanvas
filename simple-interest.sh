#!/bin/bash

# Simple Interest Calculator

# Function to calculate simple interest
calculate_simple_interest() {
    local principal=$1
    local rate=$2
    local time=$3

    # Calculate simple interest
    local interest=$(echo "scale=2; $principal * $rate * $time / 100" | bc)
    echo "Simple Interest: \$${interest}"
}

# Input validation function
validate_input() {
    local input=$1
    if [[ ! $input =~ ^[0-9]+([.][0-9]+)?$ ]]; then
        echo "Invalid input. Please enter a numeric value."
        exit 1
    fi
}

# Prompt user for inputs
read -p "Enter the principal amount: " principal
validate_input $principal

read -p "Enter the rate of interest (in %): " rate
validate_input $rate

read -p "Enter the time period (in years): " time
validate_input $time

# Calculate and display the simple interest
calculate_simple_interest $principal $rate $time
