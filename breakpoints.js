const size = {
    xs: '320px',
    sm: '768px',
    md: '1024px',
    lg: '1200px'
}
const device = {
    xs: `(max-width: ${size.xs})`,
    sm: `(max-width: ${size.sm})`,
    md: `(max-width: ${size.sm})`,
    lg: `(max-width: ${size.lg})`
}
/* eslint-disable no-unused-vars */

export default {
    size,
    device
}
/* eslint-enable no-unused-vars */
