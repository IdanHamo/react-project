const PageHeader = ({ title, description, description2 }) => {
  return (
    <>
      <div className=" mt-4 row">
        <div className="col-12 mt-4">
          <h1 className="text-center">{title}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center mt-4">{description}</div>
      </div>

      {description2 ? (
        <div className="row">
          <div className="col-12 text-center mt-4">{description2}</div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default PageHeader;
