import { expect } from '@wdio/globals'
import AddProduct from '../pageobjects/add-product.page.js'

describe('My Product page application', () => {
    it('should open and get verified successfully.', async () => {
        await AddProduct.open()

        await expect(AddProduct.navigateToPage(1)).toHaveText('Products')
        await expect(AddProduct.navigateToPage(2)).toHaveText('Add Product')
        await expect(AddProduct.navigateToPage(3)).toHaveText('Practice')
        await expect(AddProduct.navigateToPage(4)).toHaveText('Learn')
        await expect(AddProduct.navigateToPage(5)).toHaveText('Login')

        await expect(AddProduct.header).toHaveText('Add Product')

        await expect(AddProduct.formLabel(1)).toHaveText('Name')
        // Adding text that should be accepted
        await AddProduct.formInput(1).setValue('New Product')
        await expect(AddProduct.formInput(1)).toHaveValue('New Product')

        await expect(AddProduct.formLabel(2)).toHaveText('Price')
        // Should not accept text
        await AddProduct.formInput(2).setValue('Text')
        await expect(AddProduct.formInput(2)).toHaveValue('')
        // Should only accept numbers and ignore text
        await AddProduct.formInput(2).setValue('Text 2 Number')
        await expect(AddProduct.formInput(2)).toHaveValue('2')
        // Should accept numbers completely
        await AddProduct.formInput(2).setValue('20')
        await expect(AddProduct.formInput(2)).toHaveValue('20')

        await expect(AddProduct.formLabel(3)).toHaveText('Date Stocked')
        // Should not accept text
        await AddProduct.formInput(3).setValue('Text')
        await expect(AddProduct.formInput(3)).toHaveValue('')
        // Should not accept numbers in an incomplete date format and ignore text
        await AddProduct.formInput(3).setValue('Text2024Year\t11\t')
        await expect(AddProduct.formInput(3)).toHaveValue('')
        // Should only accept numbers in the date format and ignore text
        await AddProduct.formInput(3).setValue('2024\t05Filler04')
        await expect(AddProduct.formInput(3)).toHaveValue('2024-05-04')
        // Should a complete date
        await AddProduct.formInput(3).setValue('2024\t0507')
        await expect(AddProduct.formInput(3)).toHaveValue('2024-05-07')
        // Should not accept a future date
        await AddProduct.formInput(3).setValue('2030\t0507')
        await expect(AddProduct.formInput(3)).toHaveValue('2030-05-07')

        // ****** Checking all the error messages ******
        // If not 2 characters added in the input bar, then error message should appear
        await AddProduct.formInput(1).setValue('')
        await expect(AddProduct.formErrorMessage(1)).toHaveText('Name must be at least 2 characters.')

        await AddProduct.formInput(2).setValue('')
        await expect(AddProduct.formErrorMessage(2)).toHaveText('Price must not be empty and within 10 digits')

        await AddProduct.formInput(3).setValue('')
        await expect(AddProduct.formErrorMessage(3)).toHaveText('Date must not be empty.')

        await expect(AddProduct.formFillValidation()).toHaveText('Please fill in all fields')
        await expect(AddProduct.formValidation()).toHaveText('Errors must be resolved before submitting')
    })
})