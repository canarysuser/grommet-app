import React from 'react'
import { Heading, Text } from 'grommet';
import { withTranslation } from 'react-i18next'; 
//HOC - Higher Order Component - wraps the inner component with additional behaviors

class Home extends React.Component {

  render() {
    
    return (
      <div>
        <Heading level={2}>{this.props.t('homePage.title')}</Heading>
        <Text size='xsmall'>{this.props.t('homePage.subTitle')}</Text>
      </div>
    )
  }
}
export default withTranslation()(Home);
