export function handlePercentage(amount: number, fee: number) {
  return amount - (amount * (fee / 100));
}
