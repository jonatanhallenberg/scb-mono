type ChevronUpType = {
    color?: string
}

export const ChevronUp = ({ color = "black" }: ChevronUpType) => (
    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path  d="M13 7L7.70711 1.70711C7.31658 1.31658 6.68342 1.31658 6.29289 1.70711L1 7" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
)