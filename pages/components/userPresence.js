function userPresence() {
    return (
        <div className="flex bg-kyndryl/80 text-white font-semibold p-1 items-center justify-center rounded-full space-x-2 border-kyndryl-green/60 border-4">
            <span className="animate-pulse items-center justify-start bg-green-500 w-8 h-8 rounded-full"> </span>
            <p className="flex flex-grow pr-3">Antoine Leduc</p>
        </div>
    )
}

export default userPresence;
