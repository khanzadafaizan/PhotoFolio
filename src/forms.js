import React, { Component } from "react";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      successMessage: "",
      errorMessage: "",
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, subject, message } = this.state;

    // You can add form validation here if needed

    // Send a POST request to your server with the form data
    fetch("/your-server-endpoint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, subject, message }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          this.setState({
            successMessage: "Message sent successfully!",
            errorMessage: "",
          });
        } else {
          this.setState({
            successMessage: "",
            errorMessage: "Message sending failed. Please try again later.",
          });
        }
      });
  };

  render() {
    const { name, email, subject, message, successMessage, errorMessage } =
      this.state;

    return (
      <div>
        {successMessage && (
          <div className="success-message">{successMessage}</div>
        )}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleInputChange}
            placeholder="Your Name"
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleInputChange}
            placeholder="Your Email"
          />
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={this.handleInputChange}
            placeholder="Subject"
          />
          <textarea
            name="message"
            value={message}
            onChange={this.handleInputChange}
            placeholder="Your Message"
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
