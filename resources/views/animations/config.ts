export const footerAnimation: any = {
  Init: { visibility: `hidden`, y: 100 },
  Animated: { visibility: `visible`, y: 0 },
  transition: (delay: number) => ({ delay: delay }),
}
