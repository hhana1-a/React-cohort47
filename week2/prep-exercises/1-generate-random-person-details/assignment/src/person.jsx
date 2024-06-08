function Person({ personData }) {

if (personData == null) {
    return null;
}
    


  return(
    <ul>
      
          <li>First Name: {personData.first_name}</li>
          <li>Last Name: {personData.last_name}</li>
          <li>Email: {personData.email}</li>
          <li>Phone: {personData.phone}</li>
      
    </ul>
  );
}

export default Person;