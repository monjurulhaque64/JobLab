const SectionTitle = ({ heading }) => {
    return (
        <div className="md:w-4/12 mx-auto text-center my-8 mb-4">
            <h3 className="text-3xl uppercase border-[#ff9900] border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;