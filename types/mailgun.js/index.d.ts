// Type definitions for mailgun.js 2.0
// Project: https://github.com/mailgun/mailgun-js#readme
// Definitions by: LSmith-Zenoscave <https://github.com/LSmith-Zenosacve>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

declare namespace Mailgun {
    class Client {
        constructor(options?: ClientOptions);
        domains: DomainsClient;
        events: EventsClient;
        messages: MessageClient;
    }

    interface ClientOptions {
        username: string;
        key?: string;
        public_key?: string;
        url?: string;
        headers?: { [key: string]: any };
    }

    interface DNSRecord {
        name: string;
        record_type: string;
        valid: string;
        value: string;
    }

    class Domain implements DomainParameters {
        constructor(data: DomainParameters, recieving?: DNSRecord[], sending?: DNSRecord[]);
        name: string;
        receiving_dns_records?: DNSRecord[];
        require_tls?: boolean;
        sending_dns_records?: DNSRecord[];
        skip_verification?: boolean;
        smtp_login?: string;
        state?: string;
        type?: string;
    }

    class DomainsClient {
        list(query?: any): Promise<Domain[]>;
        get(domain: string): Promise<Domain>;
        create(data: DomainParameters): Promise<Domain>;
        destroy(domain: string): Promise<{ message: string }>;
        getTracking(domain: string): Promise<Map<TrackingType, TrackingData>>;
        updateTracking(
            domain: string,
            type: TrackingType,
            data: TrackingData,
        ): Promise<Map<TrackingType, TrackingData> & { message: string }>;
    }

    interface DomainParameters {
        name: string;
        smtp_password?: string;
        spam_action?: 'disabled' | 'tag';
        wildcard?: boolean;
    }

    interface Event {
        type: string;
        summary: string;
        content: any;
        timestampe: Date;
    }

    class EventsClient {
        get(domain: string, query: EventParameters): Promise<{ items: Event[]; pages: Map<PagingType, PagingData> }>;
    }

    interface EventParameters {
        page: string;
        begin?: string | number;
        end?: string | number;
        ascending?: 'yes' | 'no';
        limit?: number;
    }

    class MessageClient {
        create(domain: string, data: MessageParameters): Promise<{ id: string; message: string }>;
    }

    interface MessageParameters {
        from: string;
        to: string | string[];
        subject?: string;
        cc?: string | string[];
        bcc?: string | string[];
        html?: string;
        text?: string;
        message?: string;
        attatchment?: any;
    }

    interface PagingData {
        id: PagingType;
        number: string;
        url: string;
    }

    type PagingType = 'first' | 'last' | 'next' | 'previous';

    interface TrackingData {
        active: boolean;
        html_footer?: string;
        text_footer?: string;
    }

    type TrackingType = 'open' | 'click' | 'unsubscribe';
}

declare function client(options: Mailgun.ClientOptions): Mailgun.Client;

export { client };
