﻿# mazher-tvo-test
Test Approach:
The test approach involves building a robust and maintainable automated test framework using the Page Object Model (POM) design pattern with added logging, error handling, and reporting mechanisms. The tests are organized into logical groups and can run in parallel on both Chrome and Safari browsers.

Test Cases Covered:
Home Page Navigation (home.spec.js): Ensures the TVO Learn home page can be navigated to and validates the title.
Elementary Dropdown Navigation (elementary.spec.js): Tests the navigation to the Elementary dropdown from the header and validates its visibility.
Subjects Functionality Tests (subjects.spec.js): Covers various functionalities related to selecting a grade, scrolling, clicking on a card, navigating back, and subject page validation.

Test Execution Results:
If all tests pass, the test execution results will show successful validation of the specified functionalities on the TVO Learn website.
If any test fails, the results will provide detailed information about the failure, including error messages, logs, and the context in which the failure occurred. The Mochawesome reporting enhances the clarity of the results. Tests are configured to run on cross browsers.

Assumptions Made:
The TVO Learn website's structure remains relatively consistent during test execution.
The website's behavior remains unchanged from the time of writing the tests.
The test environment has stable and reliable internet connections.
The selectors used in the tests (e.g., class names, IDs) are valid and unique.
The website's elements and interactions follow typical web application patterns.
The TVO Learn website does not require additional authentication or CAPTCHA solving during test execution.
The tests are meant to cover a standard flow, and additional edge cases are not included in this scope.
The custom logging and error handling mechanisms effectively capture issues and enhance test debugging.
