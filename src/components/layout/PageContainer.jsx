const initHeader = (
    <>
    </>
)

const initFooter = (
    <>
        <div className="fixed bottom-0 left-0 w-full flex justify-center bg-primary-500/70">
            <i className="text-secondary-800 text-[0.8rem]">made with 💛 by 🍁</i>
        </div>
    </>
)

export const PageContainer = (
    {
        children,
        header = initHeader,
        footer = initFooter,
    }
) => {
    return (
        <>
            {header}
            {children}
            {footer}
        </>
    )
}
