import { MJMLElement } from 'mjml-core';
import React, { Component } from 'react';
import Column from 'mjml-column';
import { Navbar, InlineLinks, Link } from 'mjml-navbar';

@MJMLElement
class CustomNavbar extends Component {
    render() {
        return (
            <Navbar>
                <Column>
                    <InlineLinks>
                        <Link href="/one" key="/one">One</Link>
                        <Link href="/two" key="/two">Two</Link>
                        <Link href="/three" key="/three">Three</Link>
                    </InlineLinks>
                </Column>
            </Navbar>
        );
    }
}

CustomNavbar.tagName = 'custom-navbar';
CustomNavbar.parentTag = ['mj-container'];
CustomNavbar.endingTag = true;
CustomNavbar.defaultMJMLDefinition = { content: '' };

export default CustomNavbar;
