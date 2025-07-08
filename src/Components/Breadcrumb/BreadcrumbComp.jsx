import React from 'react'
import { Breadcrumb} from 'react-bootstrap'

const BreadcrumbComp = (props) => {
    const { page } = props;
  return (
     <Breadcrumb style={{ backgroundColor: 'white' }}>
      <Breadcrumb.Item href="/" >Home</Breadcrumb.Item>
      <Breadcrumb.Item active>{page}</Breadcrumb.Item>     
    </Breadcrumb>
  )
}

export default BreadcrumbComp