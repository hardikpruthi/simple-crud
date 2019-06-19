Feature: Test Application access
check whether user is able to access app

  Scenario: access webpage
    Given browse http://35.244.31.61/
    When I visit webpage
    Then I should get home page

  Scenario: edit a user
    Given Edit a user details
    When user  edit a user , visits http://35.244.31.61/customers/edit/6
    And clicks on save button
    Then user details are modified

  Scenario: add a new user
    Given browse http://35.244.31.61/
    When user clicks on add
    And gets adduser page, adds details
    And clicks save button
    Then new user is added

   Scenario: Delete a user
    Given browse http://35.244.31.61/
    When I click delete button
    Then the user should be deleted on homepage
