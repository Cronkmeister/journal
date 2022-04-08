function SiteLoginForm() {
  return (
    <>
      <form className="welcome__form">
        <h3 className="welcome__form-title">Enter details</h3>
        <label className="welcome__form-label">username</label>
        <input className="welcome__form-input"></input>
        <label className="welcome__form-label">password</label>
        <input className="welcome__form-input"></input>
        <button className="welcome__form-button" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default SiteLoginForm;
