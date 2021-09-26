// Calculate the total of a purchase of several items which may have an associated tax for each item

export function calculateTotal (items, tax) {
  // items is an array of item objects
  // each item object has a `price` and `taxable` status (true/false)

  // tax is the tax applied to each taxable item (value between 0 and 1)
  // if a negative tax is given to the function, it should be converted into a positive

  let total = 0

  if (tax > -1 && tax < 1) {
    for (let item of items) {
      // I'm intentionally allowing the price to be negative, in case
      // the cashier needs to calculate a refund (all items or some items refunded)
      total = total + item.price
      if (item.taxable) {
        total = total + Math.abs(tax) * item.price
      }
    }
  } else {
    // console.log("Tax is out of bounds. Must be between 0 and 1")
  }
  return total
}
