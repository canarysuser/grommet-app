import React from 'react'
import { Heading, Text, FileInput,Form,Button } from 'grommet';
import { withTranslation } from 'react-i18next';
import axios from 'axios';
//HOC - Higher Order Component - wraps the inner component with additional behaviors

class Home extends React.Component {
  state = {
    file: '',
    uploadedFile: '',
    error:''
  }
  formSubmit=(e)=>{
    e.preventDefault();
    console.log('Selected File', this.state.file)
    console.log('Selected File', this.state.file.name)
    const url='http://localhost:5258/api/UploadFile';
    const formData=new FormData(); 
    formData.append('file', this.state.file);
    formData.append('fileName', this.state.file.name);
    const AxiosConfig={
      headers:{
        'Content-Type':'multipart/form-data'
      }
    };
    axios.post(url, formData, AxiosConfig)
    .then((response)=>{
      console.log(response.data);
      this.setState({...this.state, uploadedFile: response.data.file});
    }).catch((error) => {
      console.error("Error uploading file: ", error);
      this.setState({...this.state, error: error});
    });
  }
  render() {

    return (
      <div>
        <Heading level={2}>{this.props.t('homePage.title')}</Heading>
        <Text size='xsmall'>{this.props.t('homePage.subTitle')}</Text>
        <Form onSubmit={this.formSubmit}>
          <FileInput
            name='file'
            multiple={false} 
            messages={{ browse: 'Locate', maxFile: 'Only one file.' }}
            onChange={(event, {files}) => {
              console.log('change: ', files)
              this.setState({
                ...this.state, file: files[0]
              })
            }}
          />
          <Button type="submit" label="Submit"></Button>
        </Form>
      </div>
    )
  }
}
export default withTranslation()(Home);
