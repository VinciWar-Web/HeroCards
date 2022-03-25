export const SpinnerLoading = () => {
    return (
        <div className="flex justify-center items-center bg-gray-400 bg-opacity-80 pr-0 w-screen h-screen fixed z-50 top-0">
            <div className="animate-spin rounded-full h-36 w-36 border-b-4 border-officialColor"></div>
        </div>
    )
}