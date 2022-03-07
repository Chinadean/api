/*
 *
 * HomePage
 *
 */

import React, { memo } from 'react'
import { Box } from '@strapi/design-system/Box'
import { Layout } from '@strapi/design-system/Layout'

const HomePage = () => {
  return (
    <Box background="neutral100">
      <Layout>
        <Box padding={8} background="neutral100">
          Twitter API
        </Box>
      </Layout>
    </Box>
  )
}

export default memo(HomePage)
