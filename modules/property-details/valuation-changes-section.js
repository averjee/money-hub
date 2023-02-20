import React from 'react'
import PropTypes from 'prop-types'
import { add, format } from 'date-fns'
import { AccountSection } from './account-section'
import {
    AccountList, InfoText, HighlighItem, Highlight 
  } from './style'

export const ValuationChangesSection = ({
    originalPurchasePrice,
    purchaseDate,
    sincePurchase,
    sincePurchasePercentage,
    annualAppreciation
}) =>
    <AccountSection title='Valuation Changes'>
        <AccountList>
            <HighlighItem>
                <InfoText>
                    {`Purchased for ${new Intl.NumberFormat("en-GB", {
                    style: "currency",
                    currency: "GBP",
                    minimumFractionDigits: 0,
                    }).format(Math.abs(originalPurchasePrice))} in ${format(
                    add(purchaseDate, { days: "MMM yyyy"}),
                    "do MMM yyyy"
                    )}`}
                </InfoText>

            </HighlighItem>
            <HighlighItem>
                <InfoText>Since purchase</InfoText>
                <Highlight>{sincePurchase} ({sincePurchasePercentage}%)</Highlight>
            </HighlighItem>
            <HighlighItem>
                <InfoText>Annual appreciation</InfoText>
                <Highlight>{annualAppreciation}</Highlight>
            </HighlighItem>
        </AccountList>
    </AccountSection>

ValuationChangesSection.propTypes = {
    annualAppreciation: PropTypes.string.isRequired,
    originalPurchasePrice: PropTypes.number.isRequired,
    purchaseDate: PropTypes.instanceOf(Date).isRequired,
    sincePurchase: PropTypes.string.isRequired,
    sincePurchasePercentage: PropTypes.number.isRequired
}