import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedArticleList extends Schema.Component {
  collectionName: 'components_shared_article_lists';
  info: {
    displayName: 'ArticleList';
    icon: 'apps';
  };
  attributes: {
    items: Attribute.Component<'shared.article', true>;
  };
}

export interface SharedArticle extends Schema.Component {
  collectionName: 'components_shared_articles';
  info: {
    displayName: 'article';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    shortDescription: Attribute.Text;
    author: Attribute.Relation<
      'shared.article',
      'oneToOne',
      'api::author.author'
    >;
    image: Attribute.Media & Attribute.Required;
    path: Attribute.String & Attribute.Required;
  };
}

export interface SharedButton extends Schema.Component {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'button';
    icon: 'cursor';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    variant: Attribute.Enumeration<['primary', 'secondary']>;
    path: Attribute.String & Attribute.Required;
  };
}

export interface SharedContactForm extends Schema.Component {
  collectionName: 'components_shared_contact_forms';
  info: {
    displayName: 'Contact Form';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    shortDescription: Attribute.Text & Attribute.Required;
    email: Attribute.String & Attribute.Required;
    phone: Attribute.String & Attribute.Required;
    address: Attribute.String & Attribute.Required;
  };
}

export interface SharedContentCard extends Schema.Component {
  collectionName: 'components_shared_content_cards';
  info: {
    displayName: 'Content Card';
    icon: 'archive';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    shortDescription: Attribute.Text & Attribute.Required;
    icon: Attribute.Media & Attribute.Required;
    action: Attribute.Component<'shared.link'>;
  };
}

export interface SharedFeaturedSuccessStory extends Schema.Component {
  collectionName: 'components_shared_featured_success_stories';
  info: {
    displayName: 'Featured Success Story';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    shortDescription: Attribute.Text & Attribute.Required;
    stories: Attribute.Component<'shared.content-card', true> &
      Attribute.Required;
    action: Attribute.Component<'shared.link'>;
  };
}

export interface SharedFeatured extends Schema.Component {
  collectionName: 'components_shared_featureds';
  info: {
    displayName: 'Featured';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    shortDescription: Attribute.Text & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    action: Attribute.Component<'shared.link'>;
  };
}

export interface SharedHero extends Schema.Component {
  collectionName: 'components_shared_heroes';
  info: {
    displayName: 'Hero';
    icon: 'book';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    shortDescription: Attribute.Text & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    actions: Attribute.Component<'shared.link', true>;
  };
}

export interface SharedLink extends Schema.Component {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    variant: Attribute.Enumeration<['primary', 'secondary', 'tertiary']>;
    path: Attribute.String & Attribute.Required;
    as: Attribute.Enumeration<['link', 'button']> & Attribute.DefaultTo<'link'>;
  };
}

export interface SharedLogoBanner extends Schema.Component {
  collectionName: 'components_shared_logo_banners';
  info: {
    displayName: 'Logo Banner';
    icon: 'apps';
  };
  attributes: {
    logos: Attribute.Media & Attribute.Required;
  };
}

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Attribute.Media;
  };
}

export interface SharedMultipleContentCards extends Schema.Component {
  collectionName: 'components_shared_multiple_content_cards';
  info: {
    displayName: 'MultipleContentCards';
    icon: 'bulletList';
  };
  attributes: {
    items: Attribute.Component<'shared.content-card', true>;
  };
}

export interface SharedMultipleFeatures extends Schema.Component {
  collectionName: 'components_shared_multiple_features';
  info: {
    displayName: 'MultipleFeatures';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    items: Attribute.Component<'shared.featured', true>;
  };
}

export interface SharedQuote extends Schema.Component {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.Text;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedSectionText extends Schema.Component {
  collectionName: 'components_shared_section_texts';
  info: {
    displayName: 'sectionText';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    shortDescription: Attribute.Text;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media;
  };
}

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.article-list': SharedArticleList;
      'shared.article': SharedArticle;
      'shared.button': SharedButton;
      'shared.contact-form': SharedContactForm;
      'shared.content-card': SharedContentCard;
      'shared.featured-success-story': SharedFeaturedSuccessStory;
      'shared.featured': SharedFeatured;
      'shared.hero': SharedHero;
      'shared.link': SharedLink;
      'shared.logo-banner': SharedLogoBanner;
      'shared.media': SharedMedia;
      'shared.multiple-content-cards': SharedMultipleContentCards;
      'shared.multiple-features': SharedMultipleFeatures;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.section-text': SharedSectionText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
