
import React from 'react'
import { Link } from 'react-static'

export default () => (
  <nav>
    <ul>
      <li>Overview</li>
      <li>Getting Started
        <ul>
          <li>Setting Up Your Environment</li>
          <li>Your First Module</li>
          <li>Next Steps</li>
        </ul>
      </li>
      <li><Link to="/concepts">Concepts</Link>
        <ul>
          <li>Architecture</li>
          <li>Extensions
            <ul>
              <li>Modules</li>
              <li>Language Packs</li>
              <li>Providers</li>
              <li>Libraries</li>
              <li>Themes</li>
            </ul>
          </li>
          <li>Users</li>
          <li>Security Roles</li>
          <li>Pages</li>
          <li>Automated Processes</li>
          <li>Database
            <ul>
              <li>DAL2</li>
              <li>Peta Poco</li>
              <li>Connections</li>
              <li>Cache</li>
            </ul>
          </li>
          <li>Web.config</li>
        </ul>
      </li>
      <li>
        Recipes
        <ul>
          <li>Users &amp; Roles
            <ul>
              <li>
                <Link to="/concepts/create-user/">Creating a User</Link>
                <ul>
                  <li><Link to="/concepts/admin-create-user">Admin</Link></li>
                  <li><Link to="/concepts/creating-a-user-with-prompt">Prompt</Link></li>
                  <li><Link to="/concepts/create-user-programmatically">Code</Link></li>
                </ul>
              </li>

              <li>Creating a Role</li>
              <li>Assigning a Role to a User</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
)